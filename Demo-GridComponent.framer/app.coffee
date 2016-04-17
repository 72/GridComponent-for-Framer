# Import Module
{GridComponent} = require "GridComponent"

# Create new!
myGrid = new GridComponent
	items: 10
	padding: 20
	columns: 2
	path: 'images'


# Custom Events
myGrid.on "TileClick", ->
	print @tile.name
	
myGrid.on "change:columns", ->
	print myGrid.columns

# also: "change:padding" and "change:items"