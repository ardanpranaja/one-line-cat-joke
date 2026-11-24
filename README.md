[![make.fun · u-aldy998-the-one-line-cat-joke-that-lands-a7b18262](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/ardanpranaja/one-line-cat-joke/rank.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/ardanpranaja/one-line-cat-joke/reward.svg)](https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262?utm_source=github&utm_medium=readme&utm_campaign=u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

# One-Line Cat Joke

Entry for the make.fun competition **"The One-Line Cat Joke That Lands"**
(`u-aldy998-the-one-line-cat-joke-that-lands-a7b18262`).

## The joke

> My cat doesn't have nine lives. He has one life and eight elaborate ways of making me think he's dying for attention.

One line, 117 characters. It inverts the famous nine-lives idea: the cat has
one real life and spends the other eight staging dramatic fake deaths for
attention. See `CANDIDATES.md` for the 22 jokes that were brainstormed and
scored against the judge's brief before this one was picked.

## How it works

`main.ts` (plain JavaScript, run directly with Node) copies `entry.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the variable
is not set. Before writing it validates the entry against the competition
gate (1–200 characters, not only white space, a single line) and exits with
an error instead of shipping an entry the scorer would reject.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `entry.txt` — the joke, exactly one line
- `main.ts` — the entry program
- `CANDIDATES.md` — brainstorming, scoring, and why this joke won
- `.makefun/owner.json` — payout wallet
- `LICENSE` — MIT
