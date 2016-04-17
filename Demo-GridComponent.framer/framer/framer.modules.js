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
    this.buildingLayout = false;
    this.setup();
  }

  GridComponent.prototype.setup = function() {
    if (this.buildingLayout === false) {
      this.buildingLayout = true;
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
    return this.buildingLayout = false;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2V0ZW50YXlkb3MvR2l0SHViL0dyaWRDb21wb25lbnQtZm9yLUZyYW1lci9EZW1vLUdyaWRDb21wb25lbnQuZnJhbWVyL21vZHVsZXMvR3JpZENvbXBvbmVudC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7Ozs7QUFBQSxJQUFBOzs7QUFLTSxPQUFPLENBQUM7OztFQUVaLGFBQUMsQ0FBQSxNQUFELENBQVEsU0FBUixFQUNFO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUEsV0FBWSxDQUFBLFNBQUE7SUFBaEIsQ0FBTDtJQUNBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7TUFDSCxJQUFDLENBQUEsV0FBWSxDQUFBLFNBQUEsQ0FBYixHQUEwQjtNQUMxQixJQUFDLENBQUEsS0FBRCxDQUFBO2FBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxnQkFBTjtJQUhHLENBREw7R0FERjs7RUFPQSxhQUFDLENBQUEsTUFBRCxDQUFRLFNBQVIsRUFDRTtJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLFdBQVksQ0FBQSxTQUFBO0lBQWhCLENBQUw7SUFDQSxHQUFBLEVBQUssU0FBQyxLQUFEO01BQ0gsSUFBQyxDQUFBLFdBQVksQ0FBQSxTQUFBLENBQWIsR0FBMEI7TUFDMUIsSUFBQyxDQUFBLEtBQUQsQ0FBQTthQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sZ0JBQU47SUFIRyxDQURMO0dBREY7O0VBT0EsYUFBQyxDQUFBLE1BQUQsQ0FBUSxPQUFSLEVBQ0U7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFHLElBQUMsQ0FBQSxXQUFZLENBQUEsT0FBQTtJQUFoQixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDtNQUNILElBQUMsQ0FBQSxXQUFZLENBQUEsT0FBQSxDQUFiLEdBQXdCO01BQ3hC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QSxHQUFZLElBQUMsQ0FBQSxTQUFTLENBQUMsTUFBWCxHQUFrQjtJQUM5QixJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxTQUFVLENBQUEsU0FBQSxDQUFVLENBQUM7SUFHaEMsSUFBRyxJQUFDLENBQUEsTUFBRCxJQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixLQUFnQixTQUEvQjtNQUNFLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWYsQ0FBQSxFQURGOztXQUlBLElBQUMsQ0FBQSxjQUFELEdBQWtCO0VBN0NQOzswQkFnRGIsZUFBQSxHQUFpQixTQUFBO0FBQ2YsUUFBQTtBQUFBO0FBQUEsU0FBQSxxQ0FBQTs7TUFDRSxJQUFJLENBQUMsT0FBTCxDQUFBO0FBREY7V0FFQSxJQUFDLENBQUEsU0FBRCxHQUFhO0VBSEU7Ozs7R0FwR2lCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMjI1xuR3JpZENvbXBvbmVudCBmb3IgRnJhbWVyXG5DcmVhdGVkIGJ5IEA3Mm1lbmFcbiMjI1xuXG5jbGFzcyBleHBvcnRzLkdyaWRDb21wb25lbnQgZXh0ZW5kcyBMYXllclxuXG4gIEBkZWZpbmUgXCJjb2x1bW5zXCIsXG4gICAgZ2V0OiAtPiBAX3Byb3BlcnRpZXNbXCJjb2x1bW5zXCJdXG4gICAgc2V0OiAodmFsdWUpIC0+XG4gICAgICBAX3Byb3BlcnRpZXNbXCJjb2x1bW5zXCJdID0gdmFsdWVcbiAgICAgIEBzZXR1cCgpXG4gICAgICBAZW1pdCBcImNoYW5nZTpjb2x1bW5zXCJcblxuICBAZGVmaW5lIFwicGFkZGluZ1wiLFxuICAgIGdldDogLT4gQF9wcm9wZXJ0aWVzW1wicGFkZGluZ1wiXVxuICAgIHNldDogKHZhbHVlKSAtPlxuICAgICAgQF9wcm9wZXJ0aWVzW1wicGFkZGluZ1wiXSA9IHZhbHVlXG4gICAgICBAc2V0dXAoKVxuICAgICAgQGVtaXQgXCJjaGFuZ2U6cGFkZGluZ1wiXG5cbiAgQGRlZmluZSBcIml0ZW1zXCIsXG4gICAgZ2V0OiAtPiBAX3Byb3BlcnRpZXNbXCJpdGVtc1wiXVxuICAgIHNldDogKHZhbHVlKSAtPlxuICAgICAgQF9wcm9wZXJ0aWVzW1wiaXRlbXNcIl0gPSB2YWx1ZVxuICAgICAgQHNldHVwKClcbiAgICAgIEBlbWl0IFwiY2hhbmdlOml0ZW1zXCJcblxuXG4gIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG4gICAgIyBEZWZhdWx0c1xuICAgIEBvcHRpb25zLmNvbHVtbnMgPz0gM1xuICAgIEBvcHRpb25zLnBhZGRpbmcgPz0gMFxuICAgIEBvcHRpb25zLml0ZW1zID89IDRcbiAgICBAb3B0aW9ucy5wYXRoID89ICdpbWFnZXMnXG4gICAgQG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IG51bGxcblxuICAgIHN1cGVyIEBvcHRpb25zXG5cbiAgICAjIEN1c3RvbVxuICAgIEBwYXRoID0gQG9wdGlvbnMucGF0aFxuICAgICMgVmFyc1xuICAgIEB0aWxlID0gbnVsbFxuICAgIEBncmlkSXRlbXMgPSBbXVxuICAgIEBidWlsZGluZ0xheW91dCA9IGZhbHNlXG4gICAgIyBSdW5cbiAgICBAc2V0dXAoKVxuXG5cbiAgc2V0dXA6ICgpIC0+XG4gICAgaWYgQGJ1aWxkaW5nTGF5b3V0IGlzIGZhbHNlXG4gICAgICBAYnVpbGRpbmdMYXlvdXQgPSB0cnVlXG4gICAgICBpZiBAZ3JpZEl0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgQGRlc3Ryb3lQcmV2aW91cygpXG4gICAgICBAYnVpbGRMYXlvdXQoKVxuXG5cbiAgYnVpbGRMYXlvdXQ6ICgpIC0+XG4gICAgIyBEZWZpbmUgdGlsZSBzaXplIGJhc2VkIG9uIHBhcmVudCBvciBTY3JlZW4gd2lkdGguXG4gICAgaWYgQHBhcmVudFxuICAgICAgdGlsZVNpemUgPSAoQHBhcmVudC53aWR0aCAtICgoQGNvbHVtbnMtMSkqQHBhZGRpbmcpKSAvIEBjb2x1bW5zXG4gICAgICBAd2lkdGggPSBAcGFyZW50LndpZHRoXG4gICAgZWxzZVxuICAgICAgdGlsZVNpemUgPSAoU2NyZWVuLndpZHRoIC0gKChAY29sdW1ucy0xKSpAcGFkZGluZykpIC8gQGNvbHVtbnNcbiAgICAgIEB3aWR0aCA9IFNjcmVlbi53aWR0aFxuXG4gICAgIyBHcmlkIHZhcnNcbiAgICBfY29sID0gX3JvdyA9IDBcblxuICAgICMgTG9vcDogQnVpbGQgdGlsZXNcbiAgICBmb3IgaSBpbiBbMC4uLkBpdGVtc11cbiAgICAgIGlmIGklQGNvbHVtbnMgaXMgMFxuICAgICAgICBfcm93ID0gKGkvQGNvbHVtbnMpXG4gICAgICAgIF9jb2wgPSAwXG5cbiAgICAgIF90aWxlID0gbmV3IExheWVyXG4gICAgICAgIG5hbWU6ICdUaWxlICcgKyAoaSsxKVxuICAgICAgICBzaXplOiB0aWxlU2l6ZVxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQ0NDJ1xuICAgICAgICBpbWFnZTogQHBhdGggKyAnLycgKyAoaSsxKSArICcucG5nJ1xuICAgICAgICB4OiAoX2NvbCAqIHRpbGVTaXplKSArIChfY29sICogQHBhZGRpbmcpXG4gICAgICAgIHk6IChfcm93ICogdGlsZVNpemUpICsgKF9yb3cgKiBAcGFkZGluZylcbiAgICAgICAgcGFyZW50OiBAXG5cbiAgICAgIF9jb2wrK1xuXG4gICAgICBfdGlsZS5vbiBFdmVudHMuQ2xpY2ssIChldmVudCwgbGF5ZXIpID0+XG4gICAgICAgIEB0aWxlID0gbGF5ZXJcbiAgICAgICAgQGVtaXQgXCJUaWxlQ2xpY2tcIlxuXG4gICAgICBAZ3JpZEl0ZW1zLnB1c2ggX3RpbGVcbiAgICAjIDwvIExvb3AgPlxuXG4gICAgIyBVcGRhdGUgQ29tcG9uZW50IEhlaWdodC5cbiAgICBfbGFzdEl0ZW0gPSBAZ3JpZEl0ZW1zLmxlbmd0aC0xXG4gICAgQGhlaWdodCA9IEBncmlkSXRlbXNbX2xhc3RJdGVtXS5tYXhZXG5cbiAgICAjIERldGVjdCBpZiBwYXJlbnQgaXMgYSBTY3JvbGxDb21wb25lbnQuXG4gICAgaWYgQHBhcmVudCBhbmQgQHBhcmVudC5uYW1lIGlzIFwiY29udGVudFwiXG4gICAgICBAcGFyZW50LnBhcmVudC51cGRhdGVDb250ZW50KClcblxuICAgICMgRW5kXG4gICAgQGJ1aWxkaW5nTGF5b3V0ID0gZmFsc2VcblxuXG4gIGRlc3Ryb3lQcmV2aW91czogKCkgLT5cbiAgICBmb3IgaXRlbSBpbiBAZ3JpZEl0ZW1zXG4gICAgICBpdGVtLmRlc3Ryb3koKVxuICAgIEBncmlkSXRlbXMgPSBbXVxuXG5cbiMgOiApIl19
