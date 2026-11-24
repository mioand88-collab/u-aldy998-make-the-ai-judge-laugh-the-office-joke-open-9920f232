# The Meeting About Meetings

[![make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/mioand88-collab/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/mioand88-collab/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

A make.fun entry for **Make the AI Judge Laugh: the Office Joke Open**
([bounty page](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)).

## The entry

One single-line joke about office life — the meeting that could have been an
email, taken to its logical conclusion:

> We finally held the meeting about meetings that could have been emails. The agenda had one item: 'Should this have been an email?'

## How it works

`main.ts` (Node 22+) writes that one line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Before writing, it
guards the sealed gate: the joke must be 1–200 characters, exactly one line,
and not only whitespace — otherwise it throws instead of writing.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
