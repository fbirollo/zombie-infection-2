player.onDied(function () {
    mobs_defeated = 0
})
player.onChat("mobs", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index <= mobs2.length; index++) {
            mobs.spawn(mobs2[index], pos(10, 1, 5))
            loops.pause(2000)
        }
    }
})
mobs.onMobKilled(mobs.monster(WITHER_SKELETON), function () {
    mobs_defeated += 2
    player.runChatCommand("reward")
})
mobs.onMobKilled(mobs.monster(HOGLIN), function () {
    mobs_defeated += 1
    player.runChatCommand("reward")
})
mobs.onMobKilled(mobs.monster(ELDER_GUARDIAN), function () {
    mobs_defeated += 1
    player.runChatCommand("reward")
})
mobs.onMobKilled(mobs.monster(PHANTOM), function () {
    mobs_defeated += 1
    player.runChatCommand("reward")
})
player.onChat("start", function () {
    mobs_defeated = 0
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
    gameplay.timeSet(gameplay.time(DUSK))
    gameplay.setWeather(THUNDER)
    player.runChatCommand("inv")
    loops.pause(10000)
    gameplay.title(mobs.target(NEAREST_PLAYER), "INFECCIÓN ZOMBIE", "Un juego de velocidad")
    player.runChatCommand("mobs")
})
player.onChat("reward", function () {
    if (mobs_defeated >= 2) {
        mobs.give(
        mobs.target(NEAREST_PLAYER),
        COOKED_CHICKEN,
        1
        )
    }
    if (mobs_defeated >= 4) {
        mobs.give(
        mobs.target(NEAREST_PLAYER),
        GOLDEN_APPLE,
        1
        )
    }
    if (mobs_defeated >= 10) {
        mobs.applyEffect(LEVITATION, mobs.target(NEAREST_PLAYER), 10, 1)
    }
})
mobs.onMobKilled(mobs.monster(EVOKER), function () {
    mobs_defeated += 1
    player.runChatCommand("reward")
})
player.onChat("inv", function () {
    player.execute(
    "/clear"
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_SWORD,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_HELMET,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_CHESTPLATE,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_LEGGINGS,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    DIAMOND_BOOTS,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    GOLDEN_APPLE,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    COOKED_PORKCHOP,
    64
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    BOW,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    ARROW,
    64
    )
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    mobs_defeated += 1
    player.runChatCommand("reward")
})
let mobs2: number[] = []
let mobs_defeated = 0
mobs_defeated = 0
mobs2 = [
mobs.monster(ZOMBIE),
mobs.monster(HOGLIN),
mobs.monster(EVOKER),
mobs.monster(PHANTOM),
mobs.monster(ELDER_GUARDIAN),
mobs.monster(WITHER_SKELETON)
]
