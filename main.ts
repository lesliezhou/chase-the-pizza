sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(Math.randomRange(10, 160), Math.randomRange(10, 120))
})
let pizza: Sprite = null
info.startCountdown(10)
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 . . . . . . . 3 3 . . 
. . . 3 . . . . . . . . . 3 . . 
. . . 3 . 3 3 3 . 3 3 3 . 3 . . 
. . . 3 . . 3 . . . 3 . . 3 3 . 
. . . 3 . . 3 . . . 3 . . . 3 . 
. . . 3 . . . . . . . . . . 3 . 
. . . 3 . . 3 . . . 3 . . 3 3 . 
. . . 3 3 . . 3 3 3 . . 3 3 . . 
. . . . 3 . . . . . . . 3 3 . . 
. . . . 3 3 3 . . . . . 3 . . . 
. . . . . . 3 3 3 3 3 3 3 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Food)
