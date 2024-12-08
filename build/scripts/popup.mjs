function registerSettings() {
  game.settings.register("pf2e-playtest-data", "firstTime", {
    name: "Initial Pop-Up",
    scope: "client",
    config: false,
    type: Boolean,
    default: true
  })
};

Hooks.once("init", () => {
  registerSettings();
});

Hooks.once('ready', async function() {
  if (game.user.isGM) {
    if (game.settings.get("pf2e-playtest-data", "firstTime") == true) {
      const journals = await game.packs.get("pf2e-playtest-data.war-of-immortals-playtest-journals").getDocuments();
      const journal = journals.filter(j => j.id == "6XX7V1aAoHovMNz1")[0]
      journal.sheet.render(true)
      game.settings.set("pf2e-playtest-data", "firstTime", false)
    }
  }
})
