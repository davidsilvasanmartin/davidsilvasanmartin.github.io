---
title: "Random thoughts"
created: "2025-10-07T10:00Z"
published: false
category: "Programming"
---

This file contains random thoughts. These will be random bits of information
I've learned from experience, books, videos, etc. The idea is that I can
make a blog post about some of these thoughts.

# E2E

- (TODO review/rewrite) While some data is being loaded by a web UI, the UI should show some kind of
loading indicator. This is important for the user experience, and it's equally
important for the E2E tests. Our E2E tests may need to wait for some of that data
to load (think for example populating a dropdown). It is good to wait for the
loading indicators to disappear before proceeding with the test instructions.
The alternative would be to "Sleep 5s" to wait for the data, which is a very
awful approach.
    - Sometimes it's not that we are waiting for a specific piece of data (e.g.
    a user with name "John"), but we only want to check that data is loaded
    correctly (e.g. loading records on a table: this table can return "no results"
    on a dev computer, but we need to verify the loading went OK). In this case
    it makes total sense to wait for the "loading" UI elements to disappear.
- "Decent" uses of Sleep in E2E tests:
    - TODO !!

# Metrics & Observability

- TODO a post about alerts based on latency.
- TODO the post about alerting based on memory usage (see Wiki!)
