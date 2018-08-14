---
path: /software/ls-dyna/
title: LS-DYNA
templateKey: mdSoftware
discipline: ["Structural Engineering", "Construction Engineering"]
tags: ["none"]
logo: ./lstc.png
website: "http://www.lstc.com/products/ls-dyna"
userForums: "/forum/"
userSupport: "http://www.lstc.com/support"
tutorials: "http://www.lstc.com/training"
studentPricing: Paid
professionalPricing: Paid
description: >-
  LS-DYNA is a general-purpose finite element program capable of simulating complex real world problems. It is used by the automobile, aerospace, construction, military, manufacturing, and bioengineering industries.
projects: [{name: "text", link: "www", image: ./placeholder.png, description: "blah blah"}]
otherNotes: placeHolder
---

LS-DYNA is a general-purpose finite element program capable of simulating complex real world problems. It is used by the automobile, aerospace, construction, military, manufacturing, and bioengineering industries. LS-DYNA is optimized for shared and distributed memory Unix, Linux, and Windows based, platforms, and it is fully QA'd by LSTC. The code's origins lie in highly nonlinear, transient dynamic finite element analysis using explicit time integration.

"Nonlinear" means at least one (and sometimes all) of the following complications:
 - Changing boundary conditions (such as contact between parts that changes over time)
 - Large deformations (for example the crumpling of sheet metal parts)
 - Nonlinear materials that do not exhibit ideally elastic behavior (for example thermoplastic polymers)

"Transient dynamic" means analyzing high speed, short duration events where inertial forces are important. Typical uses include:
 - Automotive crash (deformation of chassis, airbag inflation, seatbelt tensioning)
 - Explosions (underwater Naval mine, shaped charges)
 - Manufacturing (sheet metal stamping)

LS-DYNA's potential applications are numerous and can be tailored to many fields. In a given simulation, any of LS-DYNA's many features can be combined to model a wide range of physical events. An example of a simulation, which involves a unique combination of features, is the NASA JPL Mars Pathfinder landing simulation which simulated the space probe's use of airbags to aid in its landing. LS-DYNA is one of the most flexible finite element analysis software packages available.

LS-DYNA consists of a single executable file and is entirely command line driven. Therefore all that is required to run LS-DYNA is a command shell, the executable, an input file, and enough free disk space to run the calculation. All input files are in simple ASCII format and thus can be prepared using any text editor. Input files can also be prepared with the instant aid of a graphical preprocessor.

There are many third party software products available for preprocessing LS-DYNA input files. LSTC also develops its own preprocessor, LS-PrePost, which is freely distributed and runs without a license. Licensees of LS-DYNA automatically have access to all of the program's capabilities, from simple linear static mechanical analysis up to advanced thermal and flow solving methods. Furthermore, they have full use of LS-OPT, a standalone design optimization and probabilistic analysis package with an interface to LS-DYNA.
