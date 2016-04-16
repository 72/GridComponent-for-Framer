require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"GridComponent":[function(require,module,exports){

/*
GridComponent for Framer
Created by @72mena
 */
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.GridComponent = (function(superClass) {
  extend(GridComponent, superClass);

  GridComponent.define("columns", {
    get: function() {
      return this._properties["columns"];
    },
    set: function(value) {
      this._properties["columns"] = value;
      this.setup();
      return this.emit("change:columns");
    }
  });

  GridComponent.define("padding", {
    get: function() {
      return this._properties["padding"];
    },
    set: function(value) {
      this._properties["padding"] = value;
      this.setup();
      return this.emit("change:padding");
    }
  });

  GridComponent.define("items", {
    get: function() {
      return this._properties["items"];
    },
    set: function(value) {
      this._properties["items"] = value;
      this.setup();
      return this.emit("change:items");
    }
  });

  function GridComponent(options) {
    var base, base1, base2, base3, base4;
    this.options = options != null ? options : {};
    if ((base = this.options).columns == null) {
      base.columns = 3;
    }
    if ((base1 = this.options).padding == null) {
      base1.padding = 0;
    }
    if ((base2 = this.options).items == null) {
      base2.items = 4;
    }
    if ((base3 = this.options).path == null) {
      base3.path = 'images';
    }
    if ((base4 = this.options).backgroundColor == null) {
      base4.backgroundColor = null;
    }
    GridComponent.__super__.constructor.call(this, this.options);
    this.path = this.options.path;
    this.tile = null;
    this.gridItems = [];
    this.beingBuild = false;
    this.setup();
  }

  GridComponent.prototype.setup = function() {
    if (this.beingBuild === false) {
      this.beingBuild = true;
      if (this.gridItems.length > 0) {
        this.destroyPrevious();
      }
      return this.buildLayout();
    }
  };

  GridComponent.prototype.buildLayout = function() {
    var _col, _lastItem, _row, _tile, i, j, ref, tileSize;
    if (this.parent) {
      tileSize = (this.parent.width - ((this.columns - 1) * this.padding)) / this.columns;
      this.width = this.parent.width;
    } else {
      tileSize = (Screen.width - ((this.columns - 1) * this.padding)) / this.columns;
      this.width = Screen.width;
    }
    _col = _row = 0;
    for (i = j = 0, ref = this.items; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      if (i % this.columns === 0) {
        _row = i / this.columns;
        _col = 0;
      }
      _tile = new Layer({
        name: 'Tile ' + (i + 1),
        size: tileSize,
        backgroundColor: '#CCC',
        image: this.path + '/' + (i + 1) + '.png',
        x: (_col * tileSize) + (_col * this.padding),
        y: (_row * tileSize) + (_row * this.padding),
        parent: this
      });
      _col++;
      _tile.on(Events.Click, (function(_this) {
        return function(event, layer) {
          _this.tile = layer;
          return _this.emit("TileClick");
        };
      })(this));
      this.gridItems.push(_tile);
    }
    _lastItem = this.gridItems.length - 1;
    this.height = this.gridItems[_lastItem].maxY;
    if (this.parent && this.parent.name === "content") {
      this.parent.parent.updateContent();
    }
    return this.beingBuild = false;
  };

  GridComponent.prototype.destroyPrevious = function() {
    var item, j, len, ref;
    ref = this.gridItems;
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      item.destroy();
    }
    return this.gridItems = [];
  };

  return GridComponent;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2V0ZW50YXlkb3MvRGVza3RvcC9HcmlkQ29tcG9uZW50LmZyYW1lci9tb2R1bGVzL0dyaWRDb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBOzs7O0FBQUEsSUFBQTs7O0FBS00sT0FBTyxDQUFDOzs7RUFFWixhQUFDLENBQUEsTUFBRCxDQUFRLFNBQVIsRUFDRTtJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLFdBQVksQ0FBQSxTQUFBO0lBQWhCLENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxLQUFEO01BQ0gsSUFBQyxDQUFBLFdBQVksQ0FBQSxTQUFBLENBQWIsR0FBMEI7TUFDMUIsSUFBQyxDQUFBLEtBQUQsQ0FBQTthQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sZ0JBQU47SUFIRyxDQURMO0dBREY7O0VBT0EsYUFBQyxDQUFBLE1BQUQsQ0FBUSxTQUFSLEVBQ0U7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFHLElBQUMsQ0FBQSxXQUFZLENBQUEsU0FBQTtJQUFoQixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDtNQUNILElBQUMsQ0FBQSxXQUFZLENBQUEsU0FBQSxDQUFiLEdBQTBCO01BQzFCLElBQUMsQ0FBQSxLQUFELENBQUE7YUFDQSxJQUFDLENBQUEsSUFBRCxDQUFNLGdCQUFOO0lBSEcsQ0FETDtHQURGOztFQU9BLGFBQUMsQ0FBQSxNQUFELENBQVEsT0FBUixFQUNFO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUEsV0FBWSxDQUFBLE9BQUE7SUFBaEIsQ0FBTDtJQUNBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7TUFDSCxJQUFDLENBQUEsV0FBWSxDQUFBLE9BQUEsQ0FBYixHQUF3QjtNQUN4QixJQUFDLENBQUEsS0FBRCxDQUFBO2FBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxjQUFOO0lBSEcsQ0FETDtHQURGOztFQVFhLHVCQUFDLE9BQUQ7QUFFWCxRQUFBO0lBRlksSUFBQyxDQUFBLDRCQUFELFVBQVM7O1VBRWIsQ0FBQyxVQUFXOzs7V0FDWixDQUFDLFVBQVc7OztXQUNaLENBQUMsUUFBUzs7O1dBQ1YsQ0FBQyxPQUFROzs7V0FDVCxDQUFDLGtCQUFtQjs7SUFFNUIsK0NBQU0sSUFBQyxDQUFBLE9BQVA7SUFHQSxJQUFDLENBQUEsSUFBRCxHQUFRLElBQUMsQ0FBQSxPQUFPLENBQUM7SUFFakIsSUFBQyxDQUFBLElBQUQsR0FBUTtJQUNSLElBQUMsQ0FBQSxTQUFELEdBQWE7SUFDYixJQUFDLENBQUEsVUFBRCxHQUFjO0lBRWQsSUFBQyxDQUFBLEtBQUQsQ0FBQTtFQWpCVzs7MEJBb0JiLEtBQUEsR0FBTyxTQUFBO0lBQ0wsSUFBRyxJQUFDLENBQUEsVUFBRCxLQUFlLEtBQWxCO01BQ0UsSUFBQyxDQUFBLFVBQUQsR0FBYztNQUNkLElBQUcsSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUFYLEdBQW9CLENBQXZCO1FBQ0UsSUFBQyxDQUFBLGVBQUQsQ0FBQSxFQURGOzthQUVBLElBQUMsQ0FBQSxXQUFELENBQUEsRUFKRjs7RUFESzs7MEJBUVAsV0FBQSxHQUFhLFNBQUE7QUFFWCxRQUFBO0lBQUEsSUFBRyxJQUFDLENBQUEsTUFBSjtNQUNFLFFBQUEsR0FBVyxDQUFDLElBQUMsQ0FBQSxNQUFNLENBQUMsS0FBUixHQUFnQixDQUFDLENBQUMsSUFBQyxDQUFBLE9BQUQsR0FBUyxDQUFWLENBQUEsR0FBYSxJQUFDLENBQUEsT0FBZixDQUFqQixDQUFBLEdBQTRDLElBQUMsQ0FBQTtNQUN4RCxJQUFDLENBQUEsS0FBRCxHQUFTLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFGbkI7S0FBQSxNQUFBO01BSUUsUUFBQSxHQUFXLENBQUMsTUFBTSxDQUFDLEtBQVAsR0FBZSxDQUFDLENBQUMsSUFBQyxDQUFBLE9BQUQsR0FBUyxDQUFWLENBQUEsR0FBYSxJQUFDLENBQUEsT0FBZixDQUFoQixDQUFBLEdBQTJDLElBQUMsQ0FBQTtNQUN2RCxJQUFDLENBQUEsS0FBRCxHQUFTLE1BQU0sQ0FBQyxNQUxsQjs7SUFRQSxJQUFBLEdBQU8sSUFBQSxHQUFPO0FBR2QsU0FBUyxtRkFBVDtNQUNFLElBQUcsQ0FBQSxHQUFFLElBQUMsQ0FBQSxPQUFILEtBQWMsQ0FBakI7UUFDRSxJQUFBLEdBQVEsQ0FBQSxHQUFFLElBQUMsQ0FBQTtRQUNYLElBQUEsR0FBTyxFQUZUOztNQUlBLEtBQUEsR0FBWSxJQUFBLEtBQUEsQ0FDVjtRQUFBLElBQUEsRUFBTSxPQUFBLEdBQVUsQ0FBQyxDQUFBLEdBQUUsQ0FBSCxDQUFoQjtRQUNBLElBQUEsRUFBTSxRQUROO1FBRUEsZUFBQSxFQUFpQixNQUZqQjtRQUdBLEtBQUEsRUFBTyxJQUFDLENBQUEsSUFBRCxHQUFRLEdBQVIsR0FBYyxDQUFDLENBQUEsR0FBRSxDQUFILENBQWQsR0FBc0IsTUFIN0I7UUFJQSxDQUFBLEVBQUcsQ0FBQyxJQUFBLEdBQU8sUUFBUixDQUFBLEdBQW9CLENBQUMsSUFBQSxHQUFPLElBQUMsQ0FBQSxPQUFULENBSnZCO1FBS0EsQ0FBQSxFQUFHLENBQUMsSUFBQSxHQUFPLFFBQVIsQ0FBQSxHQUFvQixDQUFDLElBQUEsR0FBTyxJQUFDLENBQUEsT0FBVCxDQUx2QjtRQU1BLE1BQUEsRUFBUSxJQU5SO09BRFU7TUFTWixJQUFBO01BRUEsS0FBSyxDQUFDLEVBQU4sQ0FBUyxNQUFNLENBQUMsS0FBaEIsRUFBdUIsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLEtBQUQsRUFBUSxLQUFSO1VBQ3JCLEtBQUMsQ0FBQSxJQUFELEdBQVE7aUJBQ1IsS0FBQyxDQUFBLElBQUQsQ0FBTSxXQUFOO1FBRnFCO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF2QjtNQUtBLElBQUMsQ0FBQSxTQUFTLENBQUMsSUFBWCxDQUFnQixLQUFoQjtBQXJCRjtJQXlCQSxTQUFBLEdBQVksSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUFYLEdBQWtCO0lBQzlCLElBQUMsQ0FBQSxNQUFELEdBQVUsSUFBQyxDQUFBLFNBQVUsQ0FBQSxTQUFBLENBQVUsQ0FBQztJQUdoQyxJQUFHLElBQUMsQ0FBQSxNQUFELElBQVksSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLEtBQWdCLFNBQS9CO01BQ0UsSUFBQyxDQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBZixDQUFBLEVBREY7O1dBSUEsSUFBQyxDQUFBLFVBQUQsR0FBYztFQTlDSDs7MEJBaURiLGVBQUEsR0FBaUIsU0FBQTtBQUNmLFFBQUE7QUFBQTtBQUFBLFNBQUEscUNBQUE7O01BQ0UsSUFBSSxDQUFDLE9BQUwsQ0FBQTtBQURGO1dBRUEsSUFBQyxDQUFBLFNBQUQsR0FBYTtFQUhFOzs7O0dBckdpQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIyNcbkdyaWRDb21wb25lbnQgZm9yIEZyYW1lclxuQ3JlYXRlZCBieSBANzJtZW5hXG4jIyNcblxuY2xhc3MgZXhwb3J0cy5HcmlkQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJcblxuICBAZGVmaW5lIFwiY29sdW1uc1wiLFxuICAgIGdldDogLT4gQF9wcm9wZXJ0aWVzW1wiY29sdW1uc1wiXVxuICAgIHNldDogKHZhbHVlKSAtPlxuICAgICAgQF9wcm9wZXJ0aWVzW1wiY29sdW1uc1wiXSA9IHZhbHVlXG4gICAgICBAc2V0dXAoKVxuICAgICAgQGVtaXQgXCJjaGFuZ2U6Y29sdW1uc1wiXG5cbiAgQGRlZmluZSBcInBhZGRpbmdcIixcbiAgICBnZXQ6IC0+IEBfcHJvcGVydGllc1tcInBhZGRpbmdcIl1cbiAgICBzZXQ6ICh2YWx1ZSkgLT5cbiAgICAgIEBfcHJvcGVydGllc1tcInBhZGRpbmdcIl0gPSB2YWx1ZVxuICAgICAgQHNldHVwKClcbiAgICAgIEBlbWl0IFwiY2hhbmdlOnBhZGRpbmdcIlxuXG4gIEBkZWZpbmUgXCJpdGVtc1wiLFxuICAgIGdldDogLT4gQF9wcm9wZXJ0aWVzW1wiaXRlbXNcIl1cbiAgICBzZXQ6ICh2YWx1ZSkgLT5cbiAgICAgIEBfcHJvcGVydGllc1tcIml0ZW1zXCJdID0gdmFsdWVcbiAgICAgIEBzZXR1cCgpXG4gICAgICBAZW1pdCBcImNoYW5nZTppdGVtc1wiXG5cblxuICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuICAgICMgRGVmYXVsdHNcbiAgICBAb3B0aW9ucy5jb2x1bW5zID89IDNcbiAgICBAb3B0aW9ucy5wYWRkaW5nID89IDBcbiAgICBAb3B0aW9ucy5pdGVtcyA/PSA0XG4gICAgQG9wdGlvbnMucGF0aCA/PSAnaW1hZ2VzJ1xuICAgIEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBudWxsXG5cbiAgICBzdXBlciBAb3B0aW9uc1xuXG4gICAgIyBDdXN0b21cbiAgICBAcGF0aCA9IEBvcHRpb25zLnBhdGhcbiAgICAjIFZhcnNcbiAgICBAdGlsZSA9IG51bGxcbiAgICBAZ3JpZEl0ZW1zID0gW11cbiAgICBAYmVpbmdCdWlsZCA9IGZhbHNlXG4gICAgIyBSdW5cbiAgICBAc2V0dXAoKVxuXG5cbiAgc2V0dXA6ICgpIC0+XG4gICAgaWYgQGJlaW5nQnVpbGQgaXMgZmFsc2VcbiAgICAgIEBiZWluZ0J1aWxkID0gdHJ1ZVxuICAgICAgaWYgQGdyaWRJdGVtcy5sZW5ndGggPiAwXG4gICAgICAgIEBkZXN0cm95UHJldmlvdXMoKVxuICAgICAgQGJ1aWxkTGF5b3V0KClcblxuXG4gIGJ1aWxkTGF5b3V0OiAoKSAtPlxuICAgICMgRGVmaW5lIHRpbGUgc2l6ZSBiYXNlZCBvbiBwYXJlbnQgb3IgU2NyZWVuIHdpZHRoLlxuICAgIGlmIEBwYXJlbnRcbiAgICAgIHRpbGVTaXplID0gKEBwYXJlbnQud2lkdGggLSAoKEBjb2x1bW5zLTEpKkBwYWRkaW5nKSkgLyBAY29sdW1uc1xuICAgICAgQHdpZHRoID0gQHBhcmVudC53aWR0aFxuICAgIGVsc2VcbiAgICAgIHRpbGVTaXplID0gKFNjcmVlbi53aWR0aCAtICgoQGNvbHVtbnMtMSkqQHBhZGRpbmcpKSAvIEBjb2x1bW5zXG4gICAgICBAd2lkdGggPSBTY3JlZW4ud2lkdGhcblxuICAgICMgR3JpZCB2YXJzXG4gICAgX2NvbCA9IF9yb3cgPSAwXG5cbiAgICAjIExvb3A6IEJ1aWxkIHRpbGVzXG4gICAgZm9yIGkgaW4gWzAuLi5AaXRlbXNdXG4gICAgICBpZiBpJUBjb2x1bW5zIGlzIDBcbiAgICAgICAgX3JvdyA9IChpL0Bjb2x1bW5zKVxuICAgICAgICBfY29sID0gMFxuXG4gICAgICBfdGlsZSA9IG5ldyBMYXllclxuICAgICAgICBuYW1lOiAnVGlsZSAnICsgKGkrMSlcbiAgICAgICAgc2l6ZTogdGlsZVNpemVcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0NDQydcbiAgICAgICAgaW1hZ2U6IEBwYXRoICsgJy8nICsgKGkrMSkgKyAnLnBuZydcbiAgICAgICAgeDogKF9jb2wgKiB0aWxlU2l6ZSkgKyAoX2NvbCAqIEBwYWRkaW5nKVxuICAgICAgICB5OiAoX3JvdyAqIHRpbGVTaXplKSArIChfcm93ICogQHBhZGRpbmcpXG4gICAgICAgIHBhcmVudDogQFxuXG4gICAgICBfY29sKytcblxuICAgICAgX3RpbGUub24gRXZlbnRzLkNsaWNrLCAoZXZlbnQsIGxheWVyKSA9PlxuICAgICAgICBAdGlsZSA9IGxheWVyXG4gICAgICAgIEBlbWl0IFwiVGlsZUNsaWNrXCJcblxuXG4gICAgICBAZ3JpZEl0ZW1zLnB1c2ggX3RpbGVcbiAgICAjIDwvIExvb3AgPlxuXG4gICAgIyBVcGRhdGUgQ29tcG9uZW50IEhlaWdodC5cbiAgICBfbGFzdEl0ZW0gPSBAZ3JpZEl0ZW1zLmxlbmd0aC0xXG4gICAgQGhlaWdodCA9IEBncmlkSXRlbXNbX2xhc3RJdGVtXS5tYXhZXG5cbiAgICAjIERldGVjdCBpZiBwYXJlbnQgaXMgYSBTY3JvbGxDb21wb25lbnQuXG4gICAgaWYgQHBhcmVudCBhbmQgQHBhcmVudC5uYW1lIGlzIFwiY29udGVudFwiXG4gICAgICBAcGFyZW50LnBhcmVudC51cGRhdGVDb250ZW50KClcblxuICAgICMgRW5kXG4gICAgQGJlaW5nQnVpbGQgPSBmYWxzZVxuXG5cbiAgZGVzdHJveVByZXZpb3VzOiAoKSAtPlxuICAgIGZvciBpdGVtIGluIEBncmlkSXRlbXNcbiAgICAgIGl0ZW0uZGVzdHJveSgpXG4gICAgQGdyaWRJdGVtcyA9IFtdXG5cblxuIyA6ICkiXX0=
