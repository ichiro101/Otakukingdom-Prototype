class window.OStatus
	@ENDED = 1
	@MENU_EVENT = 2
	@SCREEN_EVENT = 3
	@TEXT_EVENT = 4

class window.OEventObject
	constructor: (@status, @value) ->

class window.OScript
	constructor: () ->
	
	buffer = []

	init: ->
		narrative "Hello there"
		narrative "You are reading a visual novel that has not yet been configured"
		narrative "Please see the developer's documentation"

	_next: ->
		if buffer.length > 0
			return item = buffer.shift()
		else
			object = new OEventObject(OStatus.ENDED, null)
			return object

	narrative = (text) ->
		bufferObject = new OEventObject(OStatus.TEXT_EVENT, text)
		buffer.push(bufferObject)


class window.OSetting
	constructor: (@width, @height) ->

# Set the default classes, these are to be overriden by the script developer
class window.Setting extends window.OSetting

class window.Script extends window.OScript
