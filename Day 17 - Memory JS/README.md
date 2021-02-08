# Remake Junior Memory 1969 from Ravensburger

* 72 cards (36 pairs)
* :root {--blue: #AEDCE9; } --> background-color: var(--blue);
* .firstElementChild(); (Similar to .firstChild());
* .gitignore
* gitignored files and folder become greyed out in explorer.
* Fisher-Yates shuffle algorithm.
* Flexbox: order. 

## Shuffles
<strong>Fisher-Yates shuffle algorithm</strong>

```javascript
    const cards = document.querySelectorAll(".card");
    for (let i = cards.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cards[randIndex].style.order = i;
      cards[i].style.order = randIndex;
    }
```

<strong>Simple shuffle 1</strong>

```javascript
    for (let card of cards) {
    let num = Math.floor(Math.random() * cards.length);
    card.style.order = num;
    }
```

<strong>Simple shuffle 2</strong>

```javascript
cardArray.sort(() => 0.5 - Math.random());
```


## Resources
* https://github.com/WebDevSimplified/Mix-Or-Match
* https://github.com/kubowania/memory-game

## To do
* Turn max 2 cards at a time. If both cards are not equal turn blue again.
* cards not allowed to click twice to score.
* Global gitignore for _source
* Do not turn the winning cards again after a mismatch
* Unable to click and reveal a third card. Only 2 cards at a time.
* Ravensburger gele achtergrond en kleurenthema.