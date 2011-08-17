# Represents an instance of a game
class OGame
	constructor: (@width, @height) ->

	# If we should be updating text from the script
	updateText = false
	currentEvent = 0

	sketch: (ps) ->
		settings = new Setting(800, 600)
		script = new Script()

		ps.setup = () ->
			script.init()
			ps.size settings.width, settings.height

		ps.draw = () ->
			ps.background(51)

			if updateText == true
				currentEvent = script._next()
				updateText = false
				# for debugging ONLY
				ps.println("Current event code: " + currentEvent.value)
			

			if currentEvent.status == OStatus.TEXT_EVENT
				ps.text currentEvent.value, 40, 400
			else if currentEvent.status == OStatus.ENDED
				ps.text "End of Game", 20, 400

		ps.mouseClicked = () ->
			updateText = true

	run: ->
		this.defineScriptFunctions
		canvas = document.getElementById 'game'
		p = new Processing canvas, this.sketch

$(document).ready () ->
	gameInstance = new OGame
	gameInstance.run()
