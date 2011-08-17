# Represents an instance of a game
class OGame
	constructor: (@width, @height) ->

	# status variables
	updateText = false
	gameStarted = false

	# current menu items
	currentMenuItems = []
	
	# we know what to paint on the screen on this moment
	currentEvent = -1

	sketch: (ps) ->
		script = new Script()

		ps.setup = () ->
			script.init()
			ps.size Setting.GAME_WIDTH, Setting.GAME_HEIGHT

		ps.draw = () ->
			ps.background(51)

			if gameStarted == true
				gameDraw()
			else
				startScreenDraw()

		ps.mouseClicked = () ->
			if gameStarted == false
				gameStarted = true
			# check if the current screen is a menu event, then we must handle
			# clicking differently
			if currentEvent.status == OStatus.MENU_EVENT
				# If it's a menu event, check if the mouseclick is within
				# the menu choices
				for oMenuItem in currentMenuItems
					if oMenuItem.within(ps.mouseX, ps.mouseY)
						# if the menu is clicked, run the function the menu is connected to
						oMenuItem.menuItem.function()
						# update the script once menu item is clicked so we can get out of menu
						# event
						updateText = true
				# do not do any more processing once a menu item decision is made and the text is
				# already updated, or if the user clicked somewhere else
				return
			
			# update text if it's not the case here
			updateText = true

		gameDraw = () ->
			if updateText == true
				currentEvent = script._next()
				updateText = false

			if currentEvent.status == OStatus.TEXT_EVENT
				ps.text currentEvent.value, 40, 400, 650, 200
			else if currentEvent.status == OStatus.ENDED
				ps.text "End of Game", 50, 50
			else if currentEvent.status == OStatus.MENU_EVENT
				menuEventDraw(currentEvent.value)

		menuEventDraw = (menuItems) ->
			count = 0
			# we only want to populate currentMenuItems once, so we use
			# a flag
			populateCurrentMenuItems = false
			if currentMenuItems.length == 0
				populateCurrentMenuItems = true

			# time to iterate and draw the menu item onto the screen
			for item in menuItems
				menuItem = new OMenuItem(ps, item, 50, 50 + Setting.MENU_ITEM_HEIGHT*1.5*count)
				menuItem.draw()

				if populateCurrentMenuItems == true
					currentMenuItems.push(menuItem)
				
				# Use count to keep track of the menu to paint on the screen so we know where
				# to place them
				count++

		startScreenDraw = () ->
			ps.text "Click to Start", 50, 50

	run: ->
		this.defineScriptFunctions
		canvas = document.getElementById 'game'
		p = new Processing canvas, this.sketch

# An internal class used to represent a menu choice on screen
class OMenuItem
	constructor: (@ps, @menuItem, @x, @y) ->

	draw: ->
		if this.within(@ps.mouseX, @ps.mouseY)
			@ps.fill(200)
		@ps.rect(@x, @y, Setting.MENU_ITEM_WIDTH, Setting.MENU_ITEM_HEIGHT)
		@ps.fill(51)
		@ps.text @menuItem.text, @x + 10, @y + Setting.MENU_ITEM_HEIGHT * 0.6
		@ps.fill(255)

	clicked: (x, y) ->

	# Check if the x, y coordinate provided is within the boundary of the box
	within: (x, y) ->
		if (x > @x and x < @x + Setting.MENU_ITEM_WIDTH) and (y > @y and y < @y + Setting.MENU_ITEM_HEIGHT)
			true

# Code that launches the game
$(document).ready () ->
	gameInstance = new OGame
	gameInstance.run()
