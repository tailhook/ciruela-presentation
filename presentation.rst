:title: P2P for Servers
:hide-slide-numbers: true
:css: main.css
:js: keys.js

.. role:: big
   :class: big

----

:id: initial

P2P for Servers
===============

.. image:: qrcode.svg
   :alt: https://tailhook.github.io/ciruela-presentation/

----

:id: agenda

Agenda
------

* Patterns
* The Tool
* Use Cases

----

:data-x: agenda+1400
:data-y: agenda-1000

Why?
====

----

:id: arch-start
:data-x: r1400
:data-y: r0

.. image:: classic_arch.svg
   :width: 1200px

----

.. image:: classic_memcached_arch.svg
   :width: 1200px

----

:class: oneatatime

DB
==

* Persistent
* Relatively slow

----

:class: oneatatime

Cache
=====

* Quite fast
* Data loss is norm

----

:class: oneatatime

Source Code
===========

* Zero-cost
* Reliable
* Read-only

----

:class: oneatatime

Source Code
===========

Source code **can** contain data:

1. Gender options
2. Shop products
3. Game content
4. Site news

----

:class: oneatatime

Source Code
===========

* May have editable data
* CI/CD
* 3-5 :big:`🕴`

----

Takeaway
========

Source code **is** your DB until you have > 5 users.

.. image:: lektor.jpg
   :class: blog-logo
   :width: 400

.. image:: publii.svg
   :class: blog-logo
   :width: 400

----

DB? Cache? Code?
================

Currency Rates

(updated daily)

----

DB? Cache? Code?
================

Categories

.. image:: categories_wikipedia.svg
   :class: image-categories
   :height: 800

----

Categories
==========

.. image:: categories_operation.jpg
   :width: 1000

----

.. image:: refresh.jpg
   :height: 800

----


.. image:: congested_port.jpg
   :height: 800

----

:id: ciruela-links
:data-x: agenda+1400
:data-y: agenda+0

Ciruela
=======

* https://github.com/tailhook/ciruela
* https://ciruela.rtfd.org

.. image:: ciruela_qr.svg
   :alt: https://ciruela.rtfd.org/


----

:data-x: r1400
:data-y: r0

.. image:: ciruela_upload.svg
   :width: 1200

----

Thats It!
=========

----

.. image:: ciruela_new_server.svg
   :width: 1200

----

:id: use-cases
:data-x: agenda+1400
:data-y: agenda+1000

Use Cases
=========

----

:data-x: r1400
:data-y: r0

.. code-block:: console

    > ciruela edit

----

:id: questions
:data-x: initial+1000
:data-y: initial+0
:data-scale: 10

Questions
=========


.. container:: final_qrcode

    .. image:: qrcode.svg
       :width: 200px
       :alt: https://tailhook.github.io/ciruela-presentation/

    Presentation

.. container:: final-qrcode

    .. figure:: ciruela_qr.svg
       :width: 200px
       :figwidth: 200px
       :alt: https://ciruela.rtfd.org/

       Documentation

