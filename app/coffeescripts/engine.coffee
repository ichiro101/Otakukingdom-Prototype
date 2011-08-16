class OScript
	init: ->
		narrative "hello world"
		narrative "hi there"


class OSetting
	constructor: (@width, @height) ->

	getWidth: ->
		@width
	
	getHeight: ->
		@height

# Set the default classes
class Setting extends OSetting

class Script extends OScript


# Represents an instance of a game
class OGame
	constructor: (@width, @height) ->

	sketch: (ps) ->

		settings = new Setting(800, 600)
		script = new Script
		script.init()

		ps.setup = () ->
			ps.noLoop()
			ps.size settings.getWidth(), settings.getHeight()

		ps.draw = () ->
			ps.text "Click to Start", 40, 20

	run: ->
		canvas = document.getElementById 'game'
		p = new Processing canvas, this.sketch

$(document).ready () ->
	gameInstance = new OGame
	gameInstance.run()
