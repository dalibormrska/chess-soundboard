// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"longVariables.js":[function(require,module,exports) {
var dalbyPgn = "[Event \"Rated Rapid game\"]\n[Site \"https://lichess.org/GR0QgVMN\"]\n[Date \"2021.12.18\"]\n[White \"Pelleasko\"]\n[Black \"Dalibor222\"]\n[Result \"1-0\"]\n[UTCDate \"2021.12.18\"]\n[UTCTime \"20:13:35\"]\n[WhiteElo \"1405\"]\n[BlackElo \"1372\"]\n[WhiteRatingDiff \"+46\"]\n[BlackRatingDiff \"-13\"]\n[Variant \"Standard\"]\n[TimeControl \"1020+10\"]\n[ECO \"D00\"]\n[Opening \"Queen's Pawn Game: Mason Variation\"]\n[Termination \"Normal\"]\n[Annotator \"lichess.org\"]\n\n1. d4 d5 2. Bf4 { D00 Queen's Pawn Game: Mason Variation } Nf6 3. e3 Bf5 4. c4 e6 5. Qb3 b6 6. Nf3 dxc4?! { (0.33 \u2192 0.92) Inaccuracy. Bd6 was best. } (6... Bd6 7. Ne5 O-O 8. Be2 c5 9. Nc3 Na6 10. Rc1 cxd4 11. exd4) 7. Qxc4 Qd7?? { (0.90 \u2192 2.97) Blunder. Bd6 was best. } (7... Bd6 8. Bxd6) 8. Ne5 Qd5?! { (3.07 \u2192 3.99) Inaccuracy. Qc8 was best. } (8... Qc8 9. Nd2 c6 10. Be2 h5 11. O-O Nd5 12. Bf3 f6 13. Nd3 Bxd3 14. Qxd3 g5 15. Bxd5) 9. Nc3? { (3.99 \u2192 2.11) Mistake. Qa4+ was best. } (9. Qa4+ c6) 9... Bd6?? { (2.11 \u2192 8.89) Blunder. Qxc4 was best. } (9... Qxc4) 10. e4?? { (8.89 \u2192 1.22) Blunder. Nxd5 was best. } (10. Nxd5 exd5) 10... Bxe4?? { (1.22 \u2192 7.76) Blunder. Qxc4 was best. } (10... Qxc4 11. Nxc4) 11. Nxd5 Bxd5 12. Qb5+ Nfd7 13. Nxd7 Nxd7 14. Bxd6 cxd6 15. Rc1 O-O 16. Qxd7 Rfd8 17. Qc7 Bxa2 18. Be2 g6 19. O-O Rdc8 20. Qxc8+ Rxc8 21. Rxc8+ Kg7 22. Rc7 a5 23. Rc6 d5 24. Rxb6 a4 25. Ra1 Bb3 26. Rxb3 axb3 27. Ra3 Kh6 28. Rxb3 Kg7 29. Rb7 h6 30. b4 Kf8 31. b5 Ke8 32. b6 Kd8 33. Rxf7 Kc8 34. b7+ Kb8 35. Ba6 Ka7 36. b8=Q+?! { (Mate in 4 \u2192 62.54) Lost forced checkmate sequence. Rf8 was best. } (36. Rf8 Kxa6 37. b8=Q g5 38. Rf7 h5 39. Ra7#) 36... Kxb8 37. Rf6 Ka7 38. Rxg6 Kxa6 39. Rxh6 Kb5 40. Rxe6 Kc4 41. h4?! { (Mate in 12 \u2192 69.06) Lost forced checkmate sequence. g4 was best. } (41. g4 Kxd4 42. g5 Kc5 43. g6 d4 44. g7 d3 45. g8=Q d2 46. Qg5+ Kb4 47. Rb6+ Kc3) 41... Kxd4 42. h5 Kc3 43. h6 d4 44. h7 d3 45. Rd6 d2 46. Rxd2 Kxd2 47. h8=Q Ke2 48. Qc3 Kd1 49. Qe3 Kc2 50. Kf1 Kd1 51. Qe2+ Kc1 52. Ke1 Kb1 53. Kd1 Ka1 54. Kc2 Ka2 55. Kc3+ Ka3 56. Qb2+ Ka4 57. Qb4# { White wins by checkmate. } 1-0";
},{}],"../../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64579" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","longVariables.js"], null)
//# sourceMappingURL=/longVariables.d80227d7.js.map