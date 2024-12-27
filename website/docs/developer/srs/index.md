---

title: The xCDL SRS
description: The project Software Requirement Specifications.
keywords:
  - xpack
  - xcdl
  - srs

date: 2015-10-25 12:00:00 +0200

---

# The xCDL Software Requirement Specifications

## Introduction

### Purpose

This document is intended for software architects, designers, and
developers, and should provide the necessary input during the design,
implementation and maintenance of the xCDL tools part of the xPack framework.

:::note

Work in progress.

:::

### Scope

This document refers to:

- the xCDL Configuration Definition Language, used to define the xCDL metadata
- the `xcdl` CLI tool
- the associated configuration process and build process.

**The main focus of xCDL is to support the configuration of multi-variant
projects, with an emphasis on bare metal C/C++ embedded projects.**

By _**multi-variant**_ it should be understood any possible combinations
of different build and test environments, like:

- multiple build platforms (like macOS, GNU/Linux, Windows)
- multiple toolchains (like GCC, LLVM clang)
- multiple target processor architectures (like ARM Cortex-M and
RISC-V), with multiple sub-architectures (like M3, M4, M0), multiple
manufacturer families (like STM32F1, STM32F4), multiple sub-families
(like STM32F10x Connectivity Line) and multiple devices (like ST STM32F107VG)
- multiple hardware platforms (boards, board revisions)
- possibly more...

For testability reasons, as an extension to physical architectures,
**synthetic architectures**, like POSIX, should be supported; therefore
multiple synthetic run platforms (like macOS, GNU/Linux) will be also considered.

The inputs of the xCDL configuration step are one or more JSON files with the
xCDL metadata.

The outputs of the xCDL configuration step are:

- source artefacts, like C/C++ header files
- system builder artefacts, like CMake/Meson/ninja configuration files

The xCDL framework should include one or more tools to:

- generate the artefacts needed by various build configurations (like C/C++ header files)
- manage (view/edit) the specific xCDL metadata, including in a GUI environment

The selection of tools used during the build process should not be limited,
any system tools being acceptable, but, for reproducibility reasons, the
xPack Development Tools are recommended.

### Definitions and acronyms

- CDL - the Configuration Definition Language, as the configuration
mechanism used by eCos
- xCDL - the xPack Configuration Definition Language and framework,
inspired by CDL
- xCDL software component - a set of source files that perform a given
function, standalone or depending on other components, together with
some metadata
- xCDL component metadata - additional informations added to
software components to describe dependencies, requirements and constraints
- xCDL configuration tools - tools running on development machines
to create and manage xCDL configurations and component metadata
- xCDL configurations - specific metadata definitions, that describe
the requirements of an application, like which components are used,
the values for preprocessor definitions, toolchain selection, build
details, etc
- xCDL build configurations - the result of processing an xCDL
configuration, usually a build folder with associated build related
files (like CMake/Meson/GNU Make files); when IDEs (like VS Code or
Eclipse) are used, it translates to an IDE build configuration
- xCDL requirements - direct requirements, generally components
that are mandatory for the build to succeed, like base classes
- xCDL constraints - in general hardware dependencies, like the
presence of a certain peripheral, but dependencies to software
options can also be used

The xCDL configurations and xCDL build configurations are related,
but are not the same.

For simple projects, there is a single xPack build configuration
for each xCDL configuration, but for tests with extensive testing,
the same xCDL configuration can be compiled with multiple versions
of a toolchain, so in multiple xCDL build configurations.

Therefore, it is better to consider the xCDL configurations a
parameter of the build configuration.

### References

- [eCos](https://ecos.sourceware.org/) - *The embedded configurable operating system*
by Cygnus Solutions ([Wikipedia](https://en.wikipedia.org/wiki/ECos))
- Manual: *The eCos Component Writer’s Guide*, by Bart Veer and
John Dallaway, published in 2001, available from
[eCos Documentation](https://ecos.sourceware.org/docs-3.0/).
- Book: *Embedded software development with eCos*, by Anthony J. Massa,
published in 2003 at Prentice Hall, available from [Amazon](https://www.amazon.com/Embedded-Software-Development-Anthony-Massa/dp/0130354732)
- Book: *Software Build Systems: Principles and Experience*,
by Peter Smith, published in 2011 at Addison Wesley, available
from [Amazon](https://www.amazon.com/Software-Build-Systems-Principles-Experience/dp/0321717287)
- IEEE Std 830-1998: *IEEE Recommended Practice for Software
Requirements Specifications*, published in 1998, available from
[IEEE](https://standards.ieee.org/ieee/830/1222/)

---

### Overview

This document is based on IEEE Std 830-1998 recommendations, but may
not follow them by the letter.

## Overall description

### Product perspective

#### Credits

The xCDL definition language is functionally inspired by eCos CDL,
but has a different syntax and supports a slightly different
functionality. The first version was based on Python definitions
and served as an excellent prototyping platform. The second
version was planned to be XML based, integrated into Eclipse.

The final version will be JSON based, integrated into Visual Studio Code.

The package management features in **xpm** were inspired by **npm**.

#### Goals

The goal is to integrate xCDL features into Visual Studio Code,
as a replacement for Eclipse Embedded CDT plug-ins.

#### Steps

The initial versions of the xCDL framework was fully written
in Python and runs on macOS and GNU/Linux.

The packages and build configurations functionality is
already implemented by **xpm**.

The first preliminary step is to generate the current CMake
and Meson configuration automatically from the xCDL metadata
(the `xcdl export` command).

The next steps are:

- implement the configuration logic that allows to generate
the C/C++ header files, and run the builds/tests via **CMake** and **Meson**
- extend the logic to generate **ninja** configurations,
possibly **GNU make** configurations similar to those used by Eclipse
- run the build internally from **xcdl**

In parallel the VS Code xPack extension will be able to edit the xcdl metadata.

The implementation will be in TypeScript, for integration into VS Code.
**xcdl** will provide both a CLI and an internal TypeScript API.
If necessary, part of the code will be moved to separate Node.js modules.

### Product functions

The xCDL definitions should be able to describe the dependencies
between various software components in order to:

- minimize the number of source files processed during the build
- generate a consistent set of preprocessor definitions
- assist xCDL tools in creating and managing configurations
- run the builds and the tests, first via CMake or Meson, later directly

### User characteristics

There are several roles for xCDL users:

- application software developer, who contributes application code to a given project
- application project manager, who creates and manages application configurations
- enterprise component developers, who create and manage private xCDL
components (the equivalent of enterprise libraries) to be used in
multiple applications
- open source component developers, who create and manage public xCDL
components, like µOS++.

### Constraints

The entire xCDL framework should be portable and run on Windows,
macOS, and GNU/Linux.

### Assumptions and dependencies

The final version of the SRS is based on the experience of
implementing **xpm**, the **xPack Development Tools** and some
µOS++ packages, like **utils-lists**, **µTest++**.

The second version of the SRS was based on the experience of
implementing the CMSIS Pack as an Eclipse plug-in, and was
intended to support the development of µOS++ and the
replacement of the C/C++ templates from the GNU ARM Eclipse
plug-ins. It was not finalised, work on CMSIS Packs was
discontinued and development was re-focused on the xPack Project.

The first version of the SRS was based on the initial experience
with the first Python prototype version, and was intended to
support the development of µOS++ Second Edition.

As implementation will progress, it is possible that new
features will be considered.

### Apportioning of requirements

Integration of configuration tools and of generated build
configurations with IDEs like Visual Studio Code will be
considered in this version of the xCDL framework.

Possible integration of build features inspired by
**ninja** will be considered in the final version.

## Specific requirements

### External interface requirements

<small>Q: How does the software interact with people,
the system's hardware, other hardware, and other software?</small>

The xCDL framework does not directly interact with system hardware,
or with other hardware.

It does interact with people, via the Visual Studio Code UI, first
via a plain JSON editor, later via a graphical UI, or via the
command line interface.

It also interacts with development tools, i.e. generates files
to be used by CMake, Meson, GNU Make, ninja.

#### Interactions with the application developer(s)

During application development, the most often performed
operation by the application developer is the build process.

The input is:

- the xCDL configuration

The output is:

- the final application image, usually a binary file.

**xpm** already supports multiple build configurations, like debug/release,
that can be used for debug or for multi-platform applications.

If the application includes tests (for example unit-tests for libraries),
they can also be implemented with **xpm** build configurations.

#### Interactions with the application project manager (component authors)

The next interaction with people is the creation of the xCDL configurations.

The input is:

- one or several enterprise/private component repositories
- one or several open source component repositories
- the user selection.

Using the xCDL configuration tool, the project manager selects:

- the board where the application is intended to run
- one or more configuration templates referring to the components
needed by the application (like minimal, network, usb, etc)
- the toolchain to be used

The project manager then:

- enables/disables various components
- sets different values to various options, like number of threads,
stack sizes, etc

The output of this process is:

- the xCDL configuration.

The xCDL configuration can be later edited, either manually
with a text editor, or with the xCDL configuration tools.

There is one xCDL configuration for each build configuration.

#### Interaction with the component developers

The component developers, who create and manage xCDL components
(the equivalent of libraries), need to create, in addition to
the usual source files, some xCDL component metadata to describe
dependencies, requirements and constraints.

There can be enterprise/private or open source component repositories.

The xCDL component metadata can be edited either with a text editor,
or with the xCDL configuration tools.

### Functional requirements

<small>Q: What is the software supposed to do?</small>

The next version of the VS COde xPack extension should add a wizard,
to allow the creation of new C/C++ projects based on the definitions
found in the µOS++ packages and an editor page to change various
settings related to components.

The software should be able to parse **xcdl** command options, the JSON files
with the xCDL metadata, the cache files, generate the desired artefacts and
run the necessary programs to perform the builds or run the tests.

#### The xCDL metadata trees

By default, the metadata associated to various software components
shall follow the same hierarchy as the folders where the components
are stored. Custom hierarchies should be possible, by defining
explicit parent nodes.

The tree nodes are xCDL objects, each with specific properties:

- package
- component
- option
- interface
- configuration

Nodes can have distinct status attributes (preliminary, may change):

- isLoaded
- isActive
- isEnabled
- isConfigurable

Since multiple boards can be supported by an xCDL component repository,
it makes no sense to have all existing boards in use during the
configuration process, but only the board required for the application.
Loading a package automatically loads all parent packages, recursively.
Packages not loaded are not presented in the xCDL configuration tools.

Components may have constraints, for example a certain driver may be
optimised to use the DMA, but only if the peripheral supports DMA.
Common constraints are related to hardware, but software constraints
can be defined too. The active/inactive state is automatically computed,
and a component is active if and only if all of its constraints are satisfied.

During the configuration process the user may select which components
to include in the build and which components are not needed, by
manually enabling/disabling components. Disabling a component
automatically disables all children components. Components may
have requirements, so enabling a component may automatically
trigger enabling other components, recursively.

In addition to dependencies definitions, the xCDL metadata should
provide some grouping definitions, to assist the xCDL tools in
providing meaningful suggestions for major selections, for
example when creating a new configuration the list of available
boards should be presented.

### Performance requirements

<small>Q: What is the speed, availability, response time,
recovery time of various software functions, etc.?</small>

Considering that the xCDL tools will usually run on development
machines, which have more than average resources (RAM and CPU),
the tools performances shall not be an issue.

### Design constraints

<small>Q: Are there any required standards in effect,
implementation language, policies for database integrity,
resource limits, operating environment(s) etc.?</small>

The **xcdl** CLI tool should run on the latest 3 Node.js
LTS releases (like 18, 20, 22).

The VS Code extension should run on relatively recent releases.

The xCDL metadata should be stored as JSON in standard text
files, editable with common text editors.

### Software system attributes

<small>Q: What are the portability, correctness,
maintainability, security, etc. considerations?</small>

Being written in TypeScript, the xCDL framework is, at
least theoretically, portable.

### Other requirements

<small>Tip: Should not describe any design or implementation details.</small>

- the xCDL framework shall not be specific to a revision
control system, svn/git/hg/etc shall be accepted; however,
the recommended revision control system is Git
- the build configurations may run on identical or different
hardware (different boards, different processors, different
amounts of ram/flash, etc); an example of such a different
configuration was used for the Metrilog SDI-12 sensors,
where the Debug configuration used a larger AVR than the Release.
- shall allow multiple toolchains
- shall be C/C++ centric and shall handle C/C++ dependencies
automatically (obviously)
- shall provide support for testing (continuous integration)
- shall provide support for custom build steps, using external
tools (for example for adding a binary checksum, custom metadata, etc)
- shall provide support for documentation generating tools (Doxygen)

Future versions:

- should provide as much help as possible to specific steps
like flash programming, debug, profiling
