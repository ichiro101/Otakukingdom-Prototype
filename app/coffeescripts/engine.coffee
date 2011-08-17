class OGameHelper


# Represents an instance of a game
class OGame
	constructor: (@width, @height) ->

	sketch: (ps) ->
		settings = new Setting(800, 600)
		currentText = 0
		started = false
		ended = false
		currentScript = []
		narrative = (text) ->
			currentScript.push(text)

		script = new Script(narrative)
		script.init()

		ps.setup = () ->
			ps.noLoop()
			ps.size settings.width, settings.height

		ps.draw = () ->
			ps.background(51)
			if started == false
				ps.text "Click to Start", 40, 20
				return
			else if ended == true
				ps.text "End of Game", 40, 20
				return
			else
				ps.text currentScript[currentText], 40, 400

		ps.mouseClicked = () ->
			update()

		update = () ->
			if started == false
				started = true
			if currentText == currentScript.length
				ended = true
			ps.redraw()
			currentText++

	run: ->
		this.defineScriptFunctions
		canvas = document.getElementById 'game'
		p = new Processing canvas, this.sketch

$(document).ready () ->
	gameInstance = new OGame
	gameInstance.run()
