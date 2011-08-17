class window.OStatus
	@ENDED = 1
	@MENU_EVENT = 2
	@SCREEN_EVENT = 3
	@TEXT_EVENT = 4

class window.OEventObject
	constructor: (@status, @value) ->

class window.MenuItem
	constructor: (@text, @function) ->

class window.OScript
	constructor: () ->
	
	buffer = []

	init: ->
		narrative "Hello there"
		narrative "You are reading a visual novel that has not yet been configured"
		narrative "Please see the developer's documentation"
		narrative "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet velit purus. Suspendisse potenti. Proin vestibulum vulputate leo, faucibus luctus ipsum ultricies at. Praesent fringilla, diam in convallis viverra, nunc quam eleifend nunc, nec accumsan massa ipsum at arcu. Proin convallis orci massa, quis aliquet libero. Vivamus vel nisi vitae nibh pharetra sagittis in id metus. Nulla facilisi. Nulla ac tortor et nunc malesuada dapibus ac in sapien. Aliquam molestie adipiscing erat ut fermentum."
		showMenu [new MenuItem("Decision 1", this.decision1), new MenuItem("Decision 2", this.decision2)]

	decision1: ->
		narrative "You have picked decision 1"

	decision2: ->
		narrative "You have picked decision 2"

	_next: ->
		if buffer.length > 0
			return item = buffer.shift()
		else
			object = new OEventObject(OStatus.ENDED, null)
			return object

	narrative = (text) ->
		bufferObject = new OEventObject(OStatus.TEXT_EVENT, text)
		buffer.push(bufferObject)

	showMenu = (menuItems) ->
		bufferObject = new OEventObject(OStatus.MENU_EVENT, menuItems)
		buffer.push(bufferObject)


class window.Setting
	@GAME_WIDTH = 800
	@GAME_HEIGHT = 600
	@MENU_ITEM_WIDTH = this.GAME_WIDTH - 100
	@MENU_ITEM_HEIGHT = 40

class window.Script extends window.OScript
