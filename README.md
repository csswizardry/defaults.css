# `defaults.css`

_A thoroughly modern, light-touch CSS reset for people who like writing CSS._

`defaults.css` is a Baseline-compatible CSS reset/normalise that weighs less
than a kilobyte. It removes the bulk of unwanted browser defaults as well as
smoothing out some inconsistencies. It’s part reset, part normalise.

```bash
$ npm i @csswizardry/defaults.css
```

## At a Glance

* Baseline compatible
* Removes only unwanted defaults
* Normalises and resets in one pass
* <1kb gzipped
* Configurable if desired

## Patterns and Paradigms

`defaults.css` is light-touch by default. It doesn’t really do _much_; certainly
nothing that you wouldn’t want it to do.

Most projects end up with a version of Normalize.css and a reset on top of that.
This means that most elements have been styled at least three times before you
even start work. Instead of normalising and then resetting, `defaults.css` is
designed to do both at once.

As someone who spends a lot of time reading code, it’s incredibly frustrating to
see every element has passed through a million different rulesets and DevTools
just becomes noise. To that end, `defaults.css` does as little as it can get
away with.

It even goes as far as gating rules behind the relevant `@-rule` where possible,
e.g.:

```css
@supports (-webkit-text-size-adjust: none) {

  html {
    -webkit-text-size-adjust: none;
  }

}
```

There’s no point seeing `-webkit-text-size-adjust` in Firefox’s DevTools.

## Configuration

In a couple of locations, you can pass in your own configuration to customise
`defaults.css` to your own needs. The three areas of customisation at 0.1.0 are:

* **Vertical rhythm:** Set a baseline grid on typographical elements by
  defining `--defaults-margin-bottom` in your project, e.g.:
  ```css
  :root {
    --defaults-margin-bottom: 1.5rem;
  }
  ```
* **Shape margins:** If you want floated images to have a specific margin that
  hugs their shape, define your own `--defaults-shape-margin`.
* **Scroll margin:** If you want `:target`ed elements to sit a small distance
  from the edge of the viewport, define `--defaults-scroll-margin` in your own
  project.

It’s worth noting that **if you don’t configure and of these settings,
`defaults.css` does nothing at all**: it will never make opinionated decisions
without your permission.

## Contributions

v0.1.0 had the sole criteria of being able to replace my combined
[Normalize.css](https://necolas.github.io/normalize.css/) and [inuitcss
reset](https://github.com/inuitcss/inuitcss/blob/develop/generic/_generic.reset.scss).
Now that it is published and public, I would gratefully accept feedback and
contributions.

## Credits

It goes without saying,
[Normalize.css](https://github.com/necolas/normalize.css) redefined the genre.
Now that cross-browser inconsistencies are far fewer, our lives are a lot
easier.
