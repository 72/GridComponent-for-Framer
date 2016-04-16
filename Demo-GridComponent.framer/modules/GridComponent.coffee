###
GridComponent for Framer
Created by @72mena
###

class exports.GridComponent extends Layer

  @define "columns",
    get: -> @_properties["columns"]
    set: (value) ->
      @_properties["columns"] = value
      @setup()
      @emit "change:columns"

  @define "padding",
    get: -> @_properties["padding"]
    set: (value) ->
      @_properties["padding"] = value
      @setup()
      @emit "change:padding"

  @define "items",
    get: -> @_properties["items"]
    set: (value) ->
      @_properties["items"] = value
      @setup()
      @emit "change:items"


  constructor: (@options={}) ->
    # Defaults
    @options.columns ?= 3
    @options.padding ?= 0
    @options.items ?= 4
    @options.path ?= 'images'
    @options.backgroundColor ?= null

    super @options

    # Custom
    @path = @options.path
    # Vars
    @tile = null
    @gridItems = []
    @beingBuild = false
    # Run
    @setup()


  setup: () ->
    if @beingBuild is false
      @beingBuild = true
      if @gridItems.length > 0
        @destroyPrevious()
      @buildLayout()


  buildLayout: () ->
    # Define tile size based on parent or Screen width.
    if @parent
      tileSize = (@parent.width - ((@columns-1)*@padding)) / @columns
      @width = @parent.width
    else
      tileSize = (Screen.width - ((@columns-1)*@padding)) / @columns
      @width = Screen.width

    # Grid vars
    _col = _row = 0

    # Loop: Build tiles
    for i in [0...@items]
      if i%@columns is 0
        _row = (i/@columns)
        _col = 0

      _tile = new Layer
        name: 'Tile ' + (i+1)
        size: tileSize
        backgroundColor: '#CCC'
        image: @path + '/' + (i+1) + '.png'
        x: (_col * tileSize) + (_col * @padding)
        y: (_row * tileSize) + (_row * @padding)
        parent: @

      _col++

      _tile.on Events.Click, (event, layer) =>
        @tile = layer
        @emit "TileClick"


      @gridItems.push _tile
    # </ Loop >

    # Update Component Height.
    _lastItem = @gridItems.length-1
    @height = @gridItems[_lastItem].maxY

    # Detect if parent is a ScrollComponent.
    if @parent and @parent.name is "content"
      @parent.parent.updateContent()

    # End
    @beingBuild = false


  destroyPrevious: () ->
    for item in @gridItems
      item.destroy()
    @gridItems = []


# : )