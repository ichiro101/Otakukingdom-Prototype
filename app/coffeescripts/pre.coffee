class window.OScript
	constructor: (@narrative) ->

	init: ->
		@narrative "Hello there"
		@narrative "You are reading a visual novel that has not yet been configured"
		@narrative "Please see the developer's documentation"

class window.OSetting
	constructor: (@width, @height) ->

# Set the default classes, these are to be overriden by the script developer
class window.Setting extends window.OSetting

class window.Script extends window.OScript
