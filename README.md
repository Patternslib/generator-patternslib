> :warning: generator-patternslib doesn't support Patternslib v4.
> For generating a pattern scaffold, use [pat-PATTERN_TEMPLATE](https://github.com/Patternslib/pat-PATTERN_TEMPLATE) instead.

# generator-patternslib

A [Yeoman](http://yeoman.io) generator for creating a [Patternslib](http://patternslib.com) pattern.

Patternslib is a toolkit for making interaction patterns which designers can
use to create rich, functional prototypes without having to know or use any
Javascript.

More info at http://patternslib.com

## Creating a new pattern:

Run the following:

```
    $ yo patternslib pat-example
```

where ``pat-example`` is the name of the pattern you'd like to create.

## Developing

To develop generator-patternslib and use the generator directly from the sources, do the following:

- Install ``yo`` globally.
- Check out this repository.
- Within the checked out repository, issue the following commands:

```
    $ npm install
    $ npm link
```
The command ``npm link`` links this repository into your users or global node_modules directory.

Now you're ready to create an example scaffolding:

```
    $ yo patternslib pat-test
```
