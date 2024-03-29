! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define
		.amd ? define("cplayer-umd", [], t) : "object" == typeof exports ? exports["cplayer-umd"] = t() : e["cplayer-umd"] =
		t()
}(this, function() {
	return function(e) {
		function t(i) {
			if (n[i]) return n[i].exports;
			var o = n[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.d = function(e, n, i) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: i
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 3)
	}([function(e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t, n, i) {
			var o = void 0,
				r = !1;
			return t.forEach(function(t, n) {
				a.default(t, e) && (o = n)
			}), void 0 !== o && (t.splice(o, 1), n > o ? (n--, r = !1) : n === o && (n = i(n), r = !0)), {
				playlist: t,
				nowpoint: n,
				needupdate: r
			}
		}
		var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(
						e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = n(10);
		t.baseRemoveMusic = o;
		var l = function() {
			function e() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				i(this, e), this.__playlist = [], this.point = 0, this.__playlist = t, this.to(n)
			}
			return r(e, [{
				key: "next",
				value: function() {
					return this.point = this.nextPoint(), this.playlist[this.point]
				}
			}, {
				key: "prev",
				value: function() {
					return this.point = this.prevPoint(), this.playlist[this.point]
				}
			}, {
				key: "now",
				value: function() {
					return this.playlist[this.point]
				}
			}, {
				key: "nowpoint",
				value: function() {
					return this.point
				}
			}, {
				key: "to",
				value: function(e) {
					this.point = Math.max(0, Math.min(e, this.__playlist.length - 1))
				}
			}, {
				key: "addMusic",
				value: function(e) {
					this.__playlist.push(e)
				}
			}, {
				key: "nextPoint",
				value: function() {
					var e = this.point + 1;
					return e >= this.__playlist.length && (e = 0), e
				}
			}, {
				key: "prevPoint",
				value: function() {
					var e = this.point - 1;
					return e < 0 && (e = this.__playlist.length - 1), e
				}
			}, {
				key: "removeMusic",
				value: function(e) {
					var t = this,
						n = o(e, this.__playlist, this.point, function(e) {
							return Math.max(0, Math.min(e, t.__playlist.length - 1))
						}),
						i = n.playlist,
						r = n.nowpoint,
						a = n.needupdate;
					return this.__playlist = i, this.point = r, a
				}
			}, {
				key: "playlist",
				get: function() {
					return this.__playlist
				}
			}]), e
		}();
		t.listloopPlaymode = l
	}, function(e, t) {
		e.exports =
			"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAiACIDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QALhAAAgEDAwIFAwMFAAAAAAAAAQIDAAQRBRIhE0EGIjFRkRQzYTI1cXOBocHR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQACAQMCBwAAAAAAAAAAAAAAAQIDETESFAQhIkFRYWL/2gAMAwEAAhEDEQA/AGBo7mOKMEBjgc4rqLaRWXG1fgUttA1qNbnpPdGV5mIRRhkiKgeTjkE5J5/1W9pniH6jVbuPdiO2gJwHG13B5wcc44+a5tPpNM4N3OwlC45RfgVlXMA2t5E/nFVZ/EEaWVlcmJmjuDHnDAdIP6MR3GSBx71Fe37LbSSKylVIyNwyM002IotGc2N7cr6+1FYTXu5iepKcnP66KzF9AoBfQ2LmzgWWJp3L72A8rNt2kY5x/wBrtfD+oSXkQ6k8iQSRuJVjwr78DcATx6YyfYehNcbsttTkayGoiGcPuh3REo2FG0bt2R6e3fvVW2vulYSSMPND9vk46jcA/Ab/ABXTlBSXsCnpvfAydb8TR3eg7bMrGrStB1c8r0wTsP4PDKe/OeRUXiPxFLBojump6fFcTtGFeCTDHaoJyMe5A70uYte+n097Z7eK6EjA4mJCptXAK7SOcE1S1a9jvbqNoYzFCkSIiFtxGBzk9znvQXD81cV1kkMSAWDQRt9bMuVB272OOPTOKKVu4+5+aKO2+gbleC5bfusf9U1ctlB1RYiAYy/Kn0P9qKKtLIkMGfeKBdkAADjgVFcffYdgcD8UUU6JPuR0UUURT//Z"
	}, function(e, t) {
		function n() {
			this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
		}

		function i(e) {
			return "function" == typeof e
		}

		function o(e) {
			return "number" == typeof e
		}

		function r(e) {
			return "object" == typeof e && null !== e
		}

		function a(e) {
			return void 0 === e
		}
		e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners =
			10, n.prototype.setMaxListeners = function(e) {
				if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
				return this._maxListeners = e, this
			}, n.prototype.emit = function(e) {
				var t, n, o, l, c, s;
				if (this._events || (this._events = {}), "error" === e && (!this._events.error || r(this._events.error) && !
						this._events.error.length)) {
					if ((t = arguments[1]) instanceof Error) throw t;
					var p = new Error('Uncaught, unspecified "error" event. (' + t + ")");
					throw p.context = t, p
				}
				if (n = this._events[e], a(n)) return !1;
				if (i(n)) switch (arguments.length) {
					case 1:
						n.call(this);
						break;
					case 2:
						n.call(this, arguments[1]);
						break;
					case 3:
						n.call(this, arguments[1], arguments[2]);
						break;
					default:
						l = Array.prototype.slice.call(arguments, 1), n.apply(this, l)
				} else if (r(n))
					for (l = Array.prototype.slice.call(arguments, 1), s = n.slice(), o = s.length, c = 0; c < o; c++) s[c].apply(
						this, l);
				return !0
			}, n.prototype.addListener = function(e, t) {
				var o;
				if (!i(t)) throw TypeError("listener must be a function");
				return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ?
					t.listener : t), this._events[e] ? r(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[
					e], t] : this._events[e] = t, r(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? n
					.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !
					0, console.error(
						"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
						this._events[e].length), "function" == typeof console.trace && console.trace()), this
			}, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
				function n() {
					this.removeListener(e, n), o || (o = !0, t.apply(this, arguments))
				}
				if (!i(t)) throw TypeError("listener must be a function");
				var o = !1;
				return n.listener = t, this.on(e, n), this
			}, n.prototype.removeListener = function(e, t) {
				var n, o, a, l;
				if (!i(t)) throw TypeError("listener must be a function");
				if (!this._events || !this._events[e]) return this;
				if (n = this._events[e], a = n.length, o = -1, n === t || i(n.listener) && n.listener === t) delete this._events[
					e], this._events.removeListener && this.emit("removeListener", e, t);
				else if (r(n)) {
					for (l = a; l-- > 0;)
						if (n[l] === t || n[l].listener && n[l].listener === t) {
							o = l;
							break
						} if (o < 0) return this;
					1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit(
						"removeListener", e, t)
				}
				return this
			}, n.prototype.removeAllListeners = function(e) {
				var t, n;
				if (!this._events) return this;
				if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this
					._events[e], this;
				if (0 === arguments.length) {
					for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
					return this.removeAllListeners("removeListener"), this._events = {}, this
				}
				if (n = this._events[e], i(n)) this.removeListener(e, n);
				else if (n)
					for (; n.length;) this.removeListener(e, n[n.length - 1]);
				return delete this._events[e], this
			}, n.prototype.listeners = function(e) {
				return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
			}, n.prototype.listenerCount = function(e) {
				if (this._events) {
					var t = this._events[e];
					if (i(t)) return 1;
					if (t) return t.length
				}
				return 0
			}, n.listenerCount = function(e, t) {
				return e.listenerCount(t)
			}
	}, function(e, t, n) {
		e.exports = n(4)
	}, function(e, t, n) {
		"use strict";
		(function(e) {
			function i(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function o(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function r(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError(
					"Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}

			function a(e) {
				return e.map(function(e, t) {
					var n = Object.assign({}, e);
					return "string" == typeof e.lyric && e.lyric.replace(/\n+/gi, "\n").trim() && (n.lyric = p.decodeLyricStr(e
						.lyric)), "string" == typeof e.sublyric && e.sublyric.replace(/\n+/gi, "\n").trim() && (n.sublyric = p.decodeLyricStr(
						e.sublyric)), n
				})
			}
			var l = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(
							e, i.key, i)
					}
				}
				return function(t, n, i) {
					return n && e(t.prototype, n), i && e(t, i), t
				}
			}();
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), n(9);
			var c = n(0),
				s = n(2),
				p = n(11),
				u = n(12),
				d = n(13),
				h = n(14),
				y = void 0;
			y = n(15).default;
			var m = {
					playlist: [],
					point: 0,
					volume: 1,
					playmode: "listloop",
					autoplay: !1
				},
				f = {
					listloop: c.listloopPlaymode,
					singlecycle: u.singlecyclePlaymode,
					listrandom: d.listrandomPlaymode
				},
				v = function(t) {
					function n(t) {
						i(this, n);
						var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
						return r.__paused = !0, r.playmodeName = "listloop", r._volume = 0, r.eventHandlers = {
								handlePlay: function() {
									r.__paused && r.pause()
								},
								handleErrors: function() {
									r.audioElement.onerror=function(){
										r.emit("error")
									}
								},
								handlePlaying: function() {
									0 === r.audioElement.currentTime && r.emit("started")
								},
								handleTimeUpdate: function() {
									var e = r.audioElement.duration,
										t = r.audioElement.currentTime;
									r.emit("timeupdate", t, e)
								},
								handleCanPlayThrough: function() {
									for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
									r.emit.apply(r, ["canplaythrough"].concat(t))
								},
								handlePause: function() {
									r.__paused || r.audioElement.ended || r.play(!0).catch(function(e) {
										console.log(e), r.pause()
									})
								},
								handleEnded: function() {
									for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
									r.emit.apply(r, ["ended"].concat(t)), r.__paused || r.next()
								},
								handlePlayListChange: function() {
									for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
									r.emit.apply(r, ["playlistchange"].concat(t))
								},
								handlePlaymodeChange: function() {
									var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.mode;
									r.emit("playmodechange", e)
								},
								handleLoadeddata: function() {
									var e = r.audioElement.duration,
										t = r.audioElement.currentTime;
									r.emit("timeupdate", t, e)
								}
							}, t = Object.assign({}, m, t), r.playmode = new f[t.playmode](a(t.playlist), t.point), r.view = new y(r, t),
							h.cplayerMediaSessionPlugin(r), e(function() {
								r.openAudio(), r.setVolume(t.volume), t.autoplay && r.playlist.length > 0 && r.play(!0).catch(function(e) {
									console.log(e), r.pause()
								})
							}), r
					}
					return r(n, t), l(n, [{
						key: "initializeEventEmitter",
						value: function(e) {
							var t = e.addEventListener.bind(e),
								n = this.eventHandlers;
							t("error", n.handleErrors),t("timeupdate", n.handleTimeUpdate), t("canplaythrough", n.handleCanPlayThrough), t("pause", n.handlePause),
								t("play", n.handlePlay), t("playing", n.handlePlaying), t("ended", n.handleEnded), t("loadeddata", n.handleLoadeddata)
						}
					}, {
						key: "removeEventEmitter",
						value: function(e) {
							var t = e.removeEventListener.bind(e),
								n = this.eventHandlers;
							t("error", n.handleErrors),t("timeupdate", n.handleTimeUpdate), t("canplaythrough", n.handleCanPlayThrough), t("pause", n.handlePause),
								t("play", n.handlePlay), t("playing", n.handlePlaying), t("ended", n.handleEnded), t("loadeddata", n.handleLoadeddata)
						}
					}, {
						key: "setCurrentTime",
						value: function(e) {
							if ("string" == typeof e && (e.trim(), "%" === e[e.length - 1])) {
								var t = parseFloat(e);
								e = this.duration * (t / 100)
							}
							this.audioElement && (this.audioElement.currentTime = parseFloat(e.toString()))
						}
					}, {
						key: "isPlaying",
						value: function() {
							return this.audioElement.currentTime > 0 && !this.audioElement.paused && !this.audioElement.ended &&
								this.audioElement.readyState > 2
						}
					}, {
						key: "openAudio",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.nowplay;
							e && ("video" === e.type ? "HTMLVideoElement" !== this.audioElementType && (void 0 !== this.audioElement &&
								(this.removeEventEmitter(this.audioElement), this.audioElement.src = ""), this.audioElement =
								document.createElement("video"), this.audioElement instanceof HTMLVideoElement && (this.audioElementType =
									"HTMLVideoElement", this.audioElement.loop = !1, this.audioElement.autoplay = !1, this.audioElement
									.poster = e.poster, this.audioElement.setAttribute("playsinline", "true"), this.audioElement.setAttribute(
										"webkit-playsinline", "true")), this.initializeEventEmitter(this.audioElement), this.emit(
									"audioelementchange", this.audioElement)) : "HTMLAudioElement" !== this.audioElementType && (void 0 !==
								this.audioElement && (this.removeEventEmitter(this.audioElement), this.audioElement.src = ""), this.audioElement =
								new Audio, this.audioElementType = "HTMLAudioElement", this.audioElement.loop = !1, this.audioElement
								.autoplay = !1, this.initializeEventEmitter(this.audioElement), this.emit("audioelementchange", this
									.audioElement)), this.setVolume(this.volume), this.audioElement.src = this.nowplay.src, this.emit(
								"openaudio", e), this.__paused || this.play())
						}
					}, {
						key: "toggleMode",
						value: function() {
							switch (this.playmodeName) {
								case "listloop":
									this.setMode("singlecycle");
									break;
								case "singlecycle":
									this.setMode("listrandom");
									break;
								case "listrandom":
									this.setMode("listloop")
							}
						}
					}, {
						key: "setMode",
						value: function(e) {
							"string" == typeof e && this.playmodeName !== e && f[e] && (this.playmode = new f[e](this.playlist,
								this.nowplaypoint), this.playmodeName = e, this.eventHandlers.handlePlaymodeChange())
						}
					}, {
						key: "getMode",
						value: function() {
							return this.mode
						}
					}, {
						key: "play",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								t = this.isPlaying(),
								n = void 0;
							return (!t && this.playlist.length > 0 || e) && (n = this.audioElement.play()), this.__paused && (this.__paused = !
								1, this.emit("playstatechange", this.__paused), this.emit("play")), n
						}
					}, {
						key: "pause",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							(this.isPlaying() && this.playlist.length > 0 || e) && this.audioElement.pause(), this.__paused || (
								this.__paused = !0, this.emit("playstatechange", this.__paused), this.emit("pause"))
						}
					}, {
						key: "to",
						value: function(e) {
							this.playmode.to(e), this.openAudio()
						}
					}, {
						key: "next",
						value: function() {
							this.playmode.next(), this.openAudio()
						}
					}, {
						key: "prev",
						value: function() {
							this.playmode.prev(), this.openAudio()
						}
					}, {
						key: "togglePlayState",
						value: function() {
							this.__paused ? this.play() : this.pause()
						}
					}, {
						key: "add",
						value: function(e) {
							e = a([e])[0], this.playmode.addMusic(e), this.eventHandlers.handlePlayListChange(), 1 === this.playlist
								.length && this.to(0)
						}
					}, {
						key: "remove",
						value: function(e) {
							var t = this.playmode.removeMusic(e);
							this.eventHandlers.handlePlayListChange(), t && this.openAudio()
						}
					}, {
						key: "setVolume",
						value: function(e) {
							this._volume = parseFloat(e), this.audioElement && (this.audioElement.volume = Math.max(0, Math.min(1,
								this._volume))), this.emit("volumechange", this.audioElement.volume)
						}
					}, {
						key: "destroy",
						value: function() {
							var e = this;
							this.audioElement && (this.audioElement.src = null, this.audioElement.removeEventListener("timeupdate",
									this.eventHandlers.handleTimeUpdate), this.removeAllListeners()), this.view && this.view.destroy(),
								Object.getOwnPropertyNames(this).forEach(function(t) {
									return delete e[t]
								}), this.__proto__ = Object
						}
					}, {
						key: "mode",
						set: function(e) {
							this.setMode(e)
						},
						get: function() {
							return this.playmodeName
						}
					}, {
						key: "volume",
						set: function(e) {
							this.setVolume(e)
						},
						get: function() {
							return this._volume
						}
					}, {
						key: "playlist",
						get: function() {
							return this.playmode.playlist
						}
					}, {
						key: "nowplay",
						get: function() {
							return this.playmode && this.playmode.now()
						}
					}, {
						key: "nowplaypoint",
						get: function() {
							return this.playmode && this.playmode.nowpoint()
						}
					}, {
						key: "played",
						get: function() {
							return !this.__paused
						}
					}, {
						key: "paused",
						get: function() {
							return this.__paused
						}
					}, {
						key: "duration",
						get: function() {
							return this.audioElement ? this.audioElement.duration : 0
						}
					}, {
						key: "currentTime",
						get: function() {
							return this.audioElement ? this.audioElement.currentTime : 0
						}
					}]), n
				}(s.EventEmitter);
			t.default = v;
			var g = function() {
				Array.prototype.forEach.call(document.querySelectorAll("template[cplayer]"), function(e) {
					e.attributes.getNamedItem("loaded") || new v(Object.assign({
						generateBeforeElement: !0,
						deleteElementAfterGenerate: !0,
						element: e
					}, JSON.parse(e.innerHTML)))
				})
			};
			window.addEventListener("load", g), window.cplayer = v
		}).call(t, n(5).setImmediate)
	}, function(e, t, n) {
		function i(e, t) {
			this._id = e, this._clearFn = t
		}
		var o = Function.prototype.apply;
		t.setTimeout = function() {
			return new i(o.call(setTimeout, window, arguments), clearTimeout)
		}, t.setInterval = function() {
			return new i(o.call(setInterval, window, arguments), clearInterval)
		}, t.clearTimeout = t.clearInterval = function(e) {
			e && e.close()
		}, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
			this._clearFn.call(window, this._id)
		}, t.enroll = function(e, t) {
			clearTimeout(e._idleTimeoutId), e._idleTimeout = t
		}, t.unenroll = function(e) {
			clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
		}, t._unrefActive = t.active = function(e) {
			clearTimeout(e._idleTimeoutId);
			var t = e._idleTimeout;
			t >= 0 && (e._idleTimeoutId = setTimeout(function() {
				e._onTimeout && e._onTimeout()
			}, t))
		}, n(6), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
	}, function(e, t, n) {
		(function(e, t) {
			! function(e, n) {
				"use strict";

				function i(e) {
					"function" != typeof e && (e = new Function("" + e));
					for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
					var i = {
						callback: e,
						args: t
					};
					return s[c] = i, l(c), c++
				}

				function o(e) {
					delete s[e]
				}

				function r(e) {
					var t = e.callback,
						i = e.args;
					switch (i.length) {
						case 0:
							t();
							break;
						case 1:
							t(i[0]);
							break;
						case 2:
							t(i[0], i[1]);
							break;
						case 3:
							t(i[0], i[1], i[2]);
							break;
						default:
							t.apply(n, i)
					}
				}

				function a(e) {
					if (p) setTimeout(a, 0, e);
					else {
						var t = s[e];
						if (t) {
							p = !0;
							try {
								r(t)
							} finally {
								o(e), p = !1
							}
						}
					}
				}
				if (!e.setImmediate) {
					var l, c = 1,
						s = {},
						p = !1,
						u = e.document,
						d = Object.getPrototypeOf && Object.getPrototypeOf(e);
					d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? function() {
						l = function(e) {
							t.nextTick(function() {
								a(e)
							})
						}
					}() : function() {
						if (e.postMessage && !e.importScripts) {
							var t = !0,
								n = e.onmessage;
							return e.onmessage = function() {
								t = !1
							}, e.postMessage("", "*"), e.onmessage = n, t
						}
					}() ? function() {
						var t = "setImmediate$" + Math.random() + "$",
							n = function(n) {
								n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
							};
						e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), l = function(n) {
							e.postMessage(t + n, "*")
						}
					}() : e.MessageChannel ? function() {
						var e = new MessageChannel;
						e.port1.onmessage = function(e) {
							a(e.data)
						}, l = function(t) {
							e.port2.postMessage(t)
						}
					}() : u && "onreadystatechange" in u.createElement("script") ? function() {
						var e = u.documentElement;
						l = function(t) {
							var n = u.createElement("script");
							n.onreadystatechange = function() {
								a(t), n.onreadystatechange = null, e.removeChild(n), n = null
							}, e.appendChild(n)
						}
					}() : function() {
						l = function(e) {
							setTimeout(a, 0, e)
						}
					}(), d.setImmediate = i, d.clearImmediate = o
				}
			}("undefined" == typeof self ? void 0 === e ? this : e : self)
		}).call(t, n(7), n(8))
	}, function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch (e) {
			"object" == typeof window && (n = window)
		}
		e.exports = n
	}, function(e, t) {
		function n() {
			throw new Error("setTimeout has not been defined")
		}

		function i() {
			throw new Error("clearTimeout has not been defined")
		}

		function o(e) {
			if (p === setTimeout) return setTimeout(e, 0);
			if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
			try {
				return p(e, 0)
			} catch (t) {
				try {
					return p.call(null, e, 0)
				} catch (t) {
					return p.call(this, e, 0)
				}
			}
		}

		function r(e) {
			if (u === clearTimeout) return clearTimeout(e);
			if ((u === i || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
			try {
				return u(e)
			} catch (t) {
				try {
					return u.call(null, e)
				} catch (t) {
					return u.call(this, e)
				}
			}
		}

		function a() {
			m && h && (m = !1, h.length ? y = h.concat(y) : f = -1, y.length && l())
		}

		function l() {
			if (!m) {
				var e = o(a);
				m = !0;
				for (var t = y.length; t;) {
					for (h = y, y = []; ++f < t;) h && h[f].run();
					f = -1, t = y.length
				}
				h = null, m = !1, r(e)
			}
		}

		function c(e, t) {
			this.fun = e, this.array = t
		}

		function s() {}
		var p, u, d = e.exports = {};
		! function() {
			try {
				p = "function" == typeof setTimeout ? setTimeout : n
			} catch (e) {
				p = n
			}
			try {
				u = "function" == typeof clearTimeout ? clearTimeout : i
			} catch (e) {
				u = i
			}
		}();
		var h, y = [],
			m = !1,
			f = -1;
		d.nextTick = function(e) {
				var t = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				y.push(new c(e, t)), 1 !== y.length || m || o(l)
			}, c.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = s, d.addListener =
			s, d.once = s, d.off = s, d.removeListener = s, d.removeAllListeners = s, d.emit = s, d.prependListener = s, d.prependOnceListener =
			s, d.listeners = function(e) {
				return []
			}, d.binding = function(e) {
				throw new Error("process.binding is not supported")
			}, d.cwd = function() {
				return "/"
			}, d.chdir = function(e) {
				throw new Error("process.chdir is not supported")
			}, d.umask = function() {
				return 0
			}
	}, function(e, t, n) {
		"use strict";
		"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
			value: function(e, t) {
				if (null == e) throw new TypeError("Cannot convert undefined or null to object");
				for (var n = Object(e), i = 1; i < arguments.length; i++) {
					var o = arguments[i];
					if (null != o)
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r])
				}
				return n
			},
			writable: !0,
			configurable: !0
		})
	}, function(e, t, n) {
		"use strict";

		function i(e, t) {
			return e == t ? 0 != e || 0 != t || 1 / e == 1 / t : e != e && t != t
		}

		function o(e, t) {
			if (i(e, t)) return !0;
			if ("object" !== (void 0 === e ? "undefined" : r(e)) || null === e || "object" !== (void 0 === t ? "undefined" :
					r(t)) || null === t) return !1;
			var n = Object.keys(e),
				o = Object.keys(t);
			if (n.length !== o.length) return !1;
			for (var l = 0; l < n.length; l++)
				if (!a.call(t, n[l]) || !i(e[n[l]], t[n[l]])) return !1;
			return !0
		}
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
				typeof e
		};
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = Object.prototype.hasOwnProperty;
		t.default = o
	}, function(e, t, n) {
		"use strict";

		function i(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
			return Array.from(e)
		}

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e, t) {
			if ("string" != typeof e) return e;
			var n = [];
			return e.replace(/\n+/gi, "\n").trim().split("\n").forEach(function(e) {
				n.push.apply(n, i(a(e)))
			}), 0 != n.length ? new c(n, e) : void 0
		}

		function a(e) {
			var t = [],
				n = e.match(/\[\d+\:[\.\d]+\]/gi),
				i = /(?:\[\d+\:[\.\d]+\])*(.*)/gi.exec(e)[1].trim();
			return n && i && n.forEach(function(e) {
				var n = /\[(\d+)\:([\.\d]+)\]/gi.exec(e.trim()),
					o = 60 * parseInt(n[1]) * 1e3 + 1e3 * parseFloat(n[2]);
				t.push({
					time: o,
					word: i
				})
			}), t
		}
		var l = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(
						e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var c = function() {
			function e(t, n) {
				o(this, e), this.items = [], this.items = t, this.raw = n
			}
			return l(e, [{
				key: "getLyric",
				value: function(e) {
					return this.items.reduce(function(t, n) {
						return n.time < e && (!t || t.time < n.time) ? n : t
					}, void 0)
				}
			}, {
				key: "getNextLyric",
				value: function(e) {
					return this.items.reduce(function(t, n) {
						return n.time > e && (!t || t.time > n.time) ? n : t
					}, void 0)
				}
			}, {
				key: "toString",
				value: function() {
					return this.raw
				}
			}]), e
		}();
		t.Lyric = c, t.decodeLyricStr = r, t.decodeLyricStrItem = a
	}, function(e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(
						e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			a = function() {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					i(this, e), this.__playlist = [], this.__playlist = t, this.to(n)
				}
				return o(e, [{
					key: "next",
					value: function() {
						return this.__playlist[this.point]
					}
				}, {
					key: "prev",
					value: function() {
						return this.__playlist[this.point]
					}
				}, {
					key: "now",
					value: function() {
						return this.__playlist[this.point]
					}
				}, {
					key: "nowpoint",
					value: function() {
						return this.point
					}
				}, {
					key: "to",
					value: function(e) {
						this.point = Math.max(0, Math.min(e, this.__playlist.length - 1))
					}
				}, {
					key: "addMusic",
					value: function(e) {
						this.__playlist.push(e)
					}
				}, {
					key: "removeMusic",
					value: function(e) {
						var t = this,
							n = r.baseRemoveMusic(e, this.__playlist, this.point, function(e) {
								return Math.max(0, Math.min(e, t.__playlist.length - 1))
							}),
							i = n.playlist,
							o = n.nowpoint,
							a = n.needupdate;
						return this.__playlist = i, this.point = o, a
					}
				}, {
					key: "playlist",
					get: function() {
						return this.__playlist
					}
				}]), e
			}();
		t.singlecyclePlaymode = a
	}, function(e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(
						e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			a = function() {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					i(this, e), this.__playlist = [], this.point = 0, this.__playlist = t, this.to(n)
				}
				return o(e, [{
					key: "next",
					value: function() {
						return this.point = this.randomPoint(), this.__playlist[this.point]
					}
				}, {
					key: "prev",
					value: function() {
						return this.point = this.randomPoint(), this.__playlist[this.point]
					}
				}, {
					key: "now",
					value: function() {
						return this.__playlist[this.point]
					}
				}, {
					key: "nowpoint",
					value: function() {
						return this.point
					}
				}, {
					key: "to",
					value: function(e) {
						this.point = Math.max(0, Math.min(e, this.__playlist.length - 1))
					}
				}, {
					key: "addMusic",
					value: function(e) {
						this.__playlist.push(e)
					}
				}, {
					key: "randomPoint",
					value: function() {
						if (this.__playlist.length > 1) {
							var e = Math.floor(this.__playlist.length * Math.random());
							return e === this.point ? this.randomPoint() : e
						}
						return 0
					}
				}, {
					key: "removeMusic",
					value: function(e) {
						var t = this,
							n = r.baseRemoveMusic(e, this.__playlist, this.point, function(e) {
								return t.randomPoint()
							}),
							i = n.playlist,
							o = n.nowpoint,
							a = n.needupdate;
						return this.__playlist = i, this.point = o, a
					}
				}, {
					key: "playlist",
					get: function() {
						return this.__playlist
					}
				}]), e
			}();
		t.listrandomPlaymode = a
	}, function(e, t, n) {
		"use strict";

		function i(e) {
			"mediaSession" in navigator && (navigator.mediaSession.metadata = o(e.nowplay), navigator.mediaSession.setActionHandler(
				"play",
				function() {
					return e.play()
				}), navigator.mediaSession.setActionHandler("pause", function() {
				return e.pause()
			}), navigator.mediaSession.setActionHandler("previoustrack", function() {
				return e.prev()
			}), navigator.mediaSession.setActionHandler("nexttrack", function() {
				return e.next()
			}), e.on("openaudio", function() {
				navigator.mediaSession.metadata = o(e.nowplay)
			}))
		}

		function o(e) {
			return new MediaMetadata({
				title: e.name,
				artist: e.artist,
				album: e.album,
				artwork: [{
					src: e.poster || r
				}]
			})
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1);
		t.cplayerMediaSessionPlugin = i, t.mediaMetadata = o
	}, function(e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}

		function r(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError(
				"Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}

		function a(e) {
			for (var t = "", n = !1, i = 0; i < e.length; i++) {
				var o = e.charAt(i),
					r = /[ぁ-んァ-ン]/.test(o);
				r && !n && (t += '<span class="cp-lyric-text-zoomout">', n = !0), !r && n && (t += "</span>", n = !1), t += o
			}
			return n && (t += "</span>"), t
		}

		function l(e, t) {
			return (arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? a(e) : e) + (t ?
				'<span class="cp-lyric-text-sub">' + t + "</span>" : "")
		}

		function c(e) {
			return parseInt((e / 60).toString()).toString().padStart(2, "0") + ":" + parseInt((e % 60).toString()).toString()
				.padStart(2, "0")
		}

		function s(e) {
			var t = document.createElement("style");
			return t.id = "cplayer-style", t.innerHTML = e, t
		}

		function p(e, t, n) {
			var i = e.createShadowRoot();
			return i.innerHTML = t, i.appendChild(s(n)), i.firstChild
		}

		function u(e, t, n) {
			var i = document.createElement("div");
			return i.innerHTML = t, e.parentNode.insertBefore(i, e), document.getElementById("cplayer-style") || document.body
				.appendChild(s(n)), i.firstChild
		}

		function d(e, t, n) {
			var i = document.createElement("div"),
				o = i.createShadowRoot();
			return o.innerHTML = t, o.appendChild(s(n)), e.parentNode.insertBefore(i, e), o.firstChild
		}

		function h(e, t, n) {
			return e.innerHTML = t, document.getElementById("cplayer-style") || document.body.appendChild(s(n)), e.firstChild
		}
		var y = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(
						e, i.key, i)
				}
			}
			return function(t, n, i) {
				return n && e(t.prototype, n), i && e(t, i), t
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var m = n(16),
			f = n(2),
			v = n(1),
			g = n(17),
			b = n(18),
			k = n(19),
			w = {
				element: document.body,
				generateBeforeElement: !1,
				deleteElementAfterGenerate: !1,
				zoomOutKana: !1,
				showPlaylist: !1,
				showPlaylistButton: !0,
				dropDownMenuMode: "bottom",
				width: "",
				size: "12px",
				style: "",
				height: 5
			},
			x = function(e) {
				function t(e, n) {
					i(this, t);
					var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
					return r.elementLinks = m.default(r.getElementLinks), r.dropDownMenuShowInfo = !0, r.__OldVolume = 1, r.__OldLyric =
						"", r.__OldTotalTime = 0, r.handlePlaylistchange = function() {
							r.updatePlaylist()
						}, r.handleClickListButton = function() {
							r.toggleDropDownMenu()
						}, r.handleClickModeButton = function() {
							r.player.toggleMode()
						}, r.handleClickPlayList = function(e, t) {
							r.player.nowplaypoint !== e && (r.player.to(e), r.player.play())
						}, r.handleClickPlayButton = function() {
							r.player.togglePlayState()
						}, r.handleClickVolumeButton = function() {
							r.toggleVolumeControllerKeepShow()
						}, r.handleOpenAudio = function(e) {
							"video" !== e.type ? r.setPoster(e.poster || v) : r.setPoster("none"), r.setProgress(0, 0, 0), r.elementLinks
								.title.innerText = e.name, r.elementLinks.artist.innerText = e.artist || "", r.updateLyric(), r.updatePlaylist()
						}, r.handleModeChange = function(e) {
							r.setMode(e)
						}, r.handleVolumeChange = function(e) {
							r.setVolume(e)
						}, r.handleTimeUpdate = function(e, t) {
							r.setProgress(e / t, e, t), r.updateLyric(e)
						}, r.handleClickPrevButton = function() {
							r.player.prev(), r.player.play()
						}, r.handleClickNextButton = function() {
							r.player.next(), r.player.play()
						}, r.handlePlayStateChange = function(e) {
							r.setPlayIcon(e)
						}, r.handleMouseVolumeController = function(e) {
							if (r.removeVolumeControllerKeepShow(), 1 === e.buttons || void 0 === e.buttons && 1 === e.which) {
								var t = Math.max(0, Math.min(1, (e.clientX - r.elementLinks.volumeController.getBoundingClientRect().left) /
									r.elementLinks.volumeController.clientWidth));
								r.player.setVolume(t), r.setVolume(t)
							}
						}, r.handleTouchVolumeController = function(e) {
							r.removeVolumeControllerKeepShow();
							var t = Math.max(0, Math.min(1, (e.targetTouches[0].clientX - r.elementLinks.volumeController.getBoundingClientRect()
								.left) / r.elementLinks.volumeController.clientWidth));
							r.player.setVolume(t), r.setVolume(t)
						}, r.handleAudioElementChange = function(e) {
							e instanceof HTMLVideoElement ? r.elementLinks.poster.appendChild(e) : r.elementLinks.poster.innerHTML = ""
						}, r.handleMouseProgress = function(e) {
							if (1 === e.buttons || void 0 === e.buttons && 1 === e.which) {
								var t = Math.max(0, Math.min(1, (e.clientX - r.elementLinks.progress.getBoundingClientRect().left) / r.elementLinks
									.progress.clientWidth));
								r.player.setCurrentTime(100 * t + "%")
							}
						}, r.handleTouchProgress = function(e) {
							var t = Math.max(0, Math.min(1, (e.targetTouches[0].clientX - r.elementLinks.progress.getBoundingClientRect()
								.left) / r.elementLinks.progress.clientWidth));
							r.player.setCurrentTime(100 * t + "%")
						}, r.options = Object.assign({}, w, n), r.player = e, r.options.generateBeforeElement ? r.options.element.createShadowRoot ?
						r.rootElement = d(r.options.element, g, k + r.options.style) : r.rootElement = u(r.options.element, g, k + r.options
							.style) : r.options.element.createShadowRoot ? r.rootElement = p(r.options.element, g, k + r.options.style) :
						r.rootElement = h(r.options.element, g, k + r.options.style), n.deleteElementAfterGenerate && n.element.parentElement
						.removeChild(n.element), r.rootElement.style.width = r.options.width, r.rootElement.style.fontSize = r.options
						.size, r.elementLinks = r.getElementLinks(), r.injectEventListener(), r.setPlayIcon(r.player.paused), r.dropDownMenuShowInfo = !
						r.options.showPlaylist, r.dropDownMenuShowInfo ? r.showInfo() : r.showPlaylist(), r.options.showPlaylistButton ?
						r.elementLinks.button.list.style.display = "" : r.elementLinks.button.list.style.display = "none", r.elementLinks
						.dropDownMenu.classList.add("cp-drop-down-menu-" + r.options.dropDownMenuMode), r.options.dark && r.dark(), r
						.options.big && r.big(), r.setPoster(r.player.nowplay.poster || v), r.setProgress(r.player.currentTime / r.player
							.duration, r.player.currentTime, r.player.duration), r.elementLinks.title.innerText = r.player.nowplay.name,
						r.elementLinks.artist.innerText = r.player.nowplay.artist || "", r.updateLyric(), r.updatePlaylist(), r
				}
				return r(t, e), y(t, [{
					key: "getRootElement",
					value: function() {
						return this.rootElement
					}
				}, {
					key: "getPlayDiv",
					value: function() {
						return this.options.element
					}
				}, {
					key: "dark",
					value: function() {
						this.rootElement.classList.add("cp-dark")
					}
				}, {
					key: "big",
					value: function() {
						this.rootElement.classList.add("cp-big")
					}
				}, {
					key: "getPlayListLinks",
					value: function() {
						return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rootElement).querySelectorAll(
							".cp-playlist li")
					}
				}, {
					key: "getElementLinks",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rootElement,
							t = function(t) {
								return e.getElementsByClassName(t)[0]
							};
						return {
							icon: {
								play: t("cp-play-icon"),
								mode: t("cp-mode-icon")
							},
							button: {
								prev: t("cp-prev-button"),
								play: t("cp-play-button"),
								next: t("cp-next-button"),
								volume: t("cp-volume-icon"),
								list: t("cp-list-button"),
								mode: t("cp-mode-button")
							},
							progress: t("cp-progress"),
							progressFill: t("cp-progress-fill"),
							progressButton: t("cp-progress-button"),
							progressDuration: t("cp-progress-duration"),
							progressCurrentTime: t("cp-progress-current-time"),
							poster: t("cp-poster"),
							title: t("cp-audio-title"),
							artist: t("cp-audio-artist"),
							lyric: t("cp-lyric-text"),
							lyricContainer: t("cp-lyric"),
							volumeController: t("cp-volume-controller"),
							volumeFill: t("cp-volume-fill"),
							volumeControllerButton: t("cp-volume-controller-button"),
							volumeControllerContainer: t("cp-volume-container"),
							dropDownMenu: t("cp-drop-down-menu"),
							playlist: t("cp-playlist"),
							playlistItems: this.getPlayListLinks(e)
						}
					}
				}, {
					key: "setPlayIcon",
					value: function(e) {
						e ? this.elementLinks.icon.play.classList.add("cp-play-icon-paused") : this.elementLinks.icon.play.classList
							.remove("cp-play-icon-paused")
					}
				}, {
					key: "setProgress",
					value: function(e, t, n) {
						this.elementLinks.progressFill.style.width = 100 * e + "%", this.elementLinks.progressButton.style.right =
							100 * (1 - e) + "%", this.elementLinks.progressCurrentTime.innerText = c(t), this.elementLinks.progressDuration
							.innerText = c(n)
					}
				}, {
					key: "setPoster",
					value: function(e) {
						this.elementLinks.poster.style.backgroundImage = 'url("' + e + '")'
					}
				}, {
					key: "setVolume",
					value: function(e) {
						this.__OldVolume !== e && (this.elementLinks.volumeFill.style.width = 100 * e + "%", this.elementLinks.volumeControllerButton
							.style.right = 100 * (1 - e) + "%", this.__OldVolume = e)
					}
				}, {
					key: "setMode",
					value: function(e) {
						var t = document.createAttribute("data-mode");
						t.value = e, this.elementLinks.button.mode.attributes.setNamedItem(t)
					}
				}, {
					key: "showInfo",
					value: function() {
						var e = this.elementLinks.dropDownMenu;
						e.style.height = "", e.classList.remove("cp-drop-down-menu-playlist"), e.classList.add(
							"cp-drop-down-menu-info"), this.dropDownMenuShowInfo = !0
					}
				}, {
					key: "showPlaylist",
					value: function() {
						var e = this.elementLinks.dropDownMenu;
						e.style.height = 2 * this.options.height + "em", e.classList.remove(
								"cp-drop-down-menu-info"), e.classList.add("cp-drop-down-menu-playlist"), this.dropDownMenuShowInfo = !
							1
					}
				}, {
					key: "toggleDropDownMenu",
					value: function() {
						this.dropDownMenuShowInfo ? this.showPlaylist() : this.showInfo()
					}
				}, {
					key: "setVolumeControllerKeepShow",
					value: function() {
						this.elementLinks.volumeControllerContainer.classList.add("cp-volume-container-show")
					}
				}, {
					key: "toggleVolumeControllerKeepShow",
					value: function() {
						this.elementLinks.volumeControllerContainer.classList.toggle("cp-volume-container-show")
					}
				}, {
					key: "removeVolumeControllerKeepShow",
					value: function() {
						this.elementLinks.volumeControllerContainer.classList.remove("cp-volume-container-show")
					}
				}, {
					key: "setLyric",
					value: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
						if (this.__OldLyric !== e || this.__OldTotalTime !== n) {
							if (this.elementLinks.lyric.innerHTML = e, this.elementLinks.lyric.style.transition = "", this.elementLinks
								.lyric.style.transform = "", 0 !== n) {
								var i = this.elementLinks.lyric.clientWidth,
									o = this.elementLinks.lyricContainer.clientWidth;
								if (i > o) {
									var r = n - t,
										a = i - o,
										l = o / i * r,
										c = Math.min(.6 * l, r),
										s = r - l;
									this.elementLinks.lyric.style.transition = "transform " + s + "ms linear " + c + "ms", this.elementLinks
										.lyric.style.transform = "translateX(-" + a + "px)"
								}
							}
							this.__OldLyric = e, this.__OldTotalTime = n
						}
					}
				}, {
					key: "updatePlaylist",
					value: function() {
						var e = this,
							t = this.player.playlist.map(function(t, n) {
								var i = document.createElement("li");
								return i.innerHTML = "\n        " + (n === e.player.nowplaypoint ? b :
										'<span class="cp-play-icon"></span>') + "\n        <span>" + t.name +
									"</span><span class='cp-playlist-artist'>" + (t.artist ? "  " + t.artist : "") + "</span>\n      ",
									i
							});
						this.elementLinks.playlist.innerHTML = "", t.forEach(function(t) {
								e.elementLinks.playlist.appendChild(t)
							}), this.elementLinks.playlistItems = this.getPlayListLinks(), this.injectPlayListEventListener(), this.dropDownMenuShowInfo ||
							(this.elementLinks.dropDownMenu.style.height = 2.08333 * this.options.height + "rem")
					}
				}, {
					key: "injectPlayListEventListener",
					value: function() {
						var e = this;
						Array.prototype.forEach.call(this.elementLinks.playlistItems, function(t, n) {
							t.addEventListener("click", function(t) {
								e.handleClickPlayList(n, t)
							})
						})
					}
				}, {
					key: "injectEventListener",
					value: function() {
						this.elementLinks.button.play.addEventListener("click", this.handleClickPlayButton), this.elementLinks.button
							.prev.addEventListener("click", this.handleClickPrevButton), this.elementLinks.button.next.addEventListener(
								"click", this.handleClickNextButton), this.elementLinks.button.volume.addEventListener("click", this.handleClickVolumeButton),
							this.elementLinks.button.list.addEventListener("click", this.handleClickListButton), this.elementLinks.button
							.mode.addEventListener("click", this.handleClickModeButton), this.elementLinks.volumeController.addEventListener(
								"mousemove", this.handleMouseVolumeController), this.elementLinks.volumeController.addEventListener(
								"mousedown", this.handleMouseVolumeController), this.elementLinks.volumeController.addEventListener(
								"touchmove", this.handleTouchVolumeController, {
									passive: !0
								}), this.elementLinks.progress.addEventListener("mousemove", this.handleMouseProgress), this.elementLinks
							.progress.addEventListener("mousedown", this.handleMouseProgress), this.elementLinks.progress.addEventListener(
								"touchmove", this.handleTouchProgress, {
									passive: !0
								}), this.player.addListener("playstatechange", this.handlePlayStateChange), this.player.addListener(
								"timeupdate", this.handleTimeUpdate), this.player.addListener("openaudio", this.handleOpenAudio), this.player
							.addListener("volumechange", this.handleVolumeChange), this.player.addListener("playmodechange", this.handleModeChange),
							this.player.addListener("playlistchange", this.handlePlaylistchange), this.player.addListener(
								"audioelementchange", this.handleAudioElementChange), this.injectPlayListEventListener()
					}
				}, {
					key: "updateLyric",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						if (this.player.nowplay.lyric && "string" != typeof this.player.nowplay.lyric && this.player.played) {
							var t = this.player.nowplay.lyric.getLyric(1e3 * e),
								n = this.player.nowplay.lyric.getNextLyric(1e3 * e);
							if (t) {
								var i = void 0;
								if (this.player.nowplay.sublyric && "string" != typeof this.player.nowplay.sublyric && (i = this.player
										.nowplay.sublyric.getLyric(1e3 * e)), n) {
									var o = n.time - t.time,
										r = 1e3 * e - t.time;
									this.setLyric(l(t.word, i ? i.word : void 0, this.options.zoomOutKana), r, o)
								} else {
									var a = this.player.duration - t.time,
										c = 1e3 * e - t.time;
									this.setLyric(l(t.word, i ? i.word : void 0, this.options.zoomOutKana), c, a)
								}
							} else this.setLyric(l(this.player.nowplay.name, this.player.nowplay.artist, !1), 1e3 * e, n.time)
						} else this.setLyric(l(this.player.nowplay.name, this.player.nowplay.artist, !1))
					}
				}, {
					key: "destroy",
					value: function() {
						this.rootElement.parentElement.removeChild(this.rootElement)
					}
				}]), t
			}(f.EventEmitter);
		t.default = x
	}, function(e, t, n) {
		"use strict";

		function i(e) {
			return {}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.default = i
	}, function(e, t) {
		e.exports =
			'<c-player loaded> <div class=cp-mainbody> <div class=cp-poster> </div> <div class=cp-center-container> <div class=cp-controls> <a class=cp-prev-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class=cp-prev-icon viewBox="0 0 1024 1024" version=1.1> <path d="M943.705 11.8c10.321 5.183 17.325 15.601 17.534 27.675l-0.004 938.318c-0.167 12.186-7.229 22.684-17.457 27.782-4.857 2.548-10.527 4.026-16.543 4.026a35.75 35.75 0 0 1-18.217-4.955l-716.617-469c-9.689-5.299-16.151-15.421-16.151-27.053 0-11.63 6.462-21.753 15.991-26.972L909.186 12.666c5.177-3.048 11.404-4.848 18.052-4.848a35.878 35.878 0 0 1 16.665 4.077z"/> <path d="M228.435 77.809v868.712c-3.889 42.573-39.416 75.664-82.673 75.664s-78.784-33.091-82.649-75.34l-0.024-869.036C65.9 34.259 101.911 0 145.924 0s80.024 34.259 82.822 77.564z"/> </svg> </a> <a class=cp-play-button> <span class="cp-play-icon cp-play-icon-paused"> <div class=cp-play-icon-left></div> <div class=cp-play-icon-right></div> <div class=cp-play-icon-triangle-1></div> <div class=cp-play-icon-triangle-2></div> </span> </a> <a class=cp-next-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class=cp-next-icon viewBox="0 0 1024 1024" version=1.1> <path d="M943.705 11.8c10.321 5.183 17.325 15.601 17.534 27.675l-0.004 938.318c-0.167 12.186-7.229 22.684-17.457 27.782-4.857 2.548-10.527 4.026-16.543 4.026a35.75 35.75 0 0 1-18.217-4.955l-716.617-469c-9.689-5.299-16.151-15.421-16.151-27.053 0-11.63 6.462-21.753 15.991-26.972L909.186 12.666c5.177-3.048 11.404-4.848 18.052-4.848a35.878 35.878 0 0 1 16.665 4.077z"/> <path d="M228.435 77.809v868.712c-3.889 42.573-39.416 75.664-82.673 75.664s-78.784-33.091-82.649-75.34l-0.024-869.036C65.9 34.259 101.911 0 145.924 0s80.024 34.259 82.822 77.564z"/> </svg> </a> </div> <div class=cp-lyric> <span class=cp-lyric-text></span> </div> </div> <a class=cp-volume-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-volume-icon cp-icon-dark" viewBox="0 200 1024 650" version=1.1> <path d="M607.869008 364.026176l-49.340512 49.340528c25.412064 25.160448 41.150352 60.055392 41.150352 98.637648 0 38.573568-15.738288 73.477184-41.150352 98.62896l49.340512 49.340512c37.836112-37.888176 61.244-90.195872 61.244-147.969488 0-57.782272-23.407888-110.081328-61.244-147.978176z"/> <path d="M807.937968 512c0-96.086912-39.050752-183.055296-102.134064-245.904368L656.95792 314.9416c50.398992 50.45104 81.563248 120.1108 81.563248 197.0584 0 76.938912-31.172944 146.598672-81.563248 197.0584l48.845984 48.845968C768.887216 695.055296 807.937968 608.086896 807.937968 512z"/> <path d="M946.780288 512.004336c0-134.434896-54.598176-256.107376-142.807248-344.082192l-49.088912 49.088896c75.65488 75.411952 122.470672 179.732384 122.470672 294.993296 0 115.252224-46.815792 219.581328-122.470672 294.984608l49.088912 49.088912c88.209072-87.966144 142.807248-209.647312 142.807248-344.07352z"/> <path d="M247.605111 659.304938 458.566804 854.551527 458.566804 169.448479 251.58222 364.704275 53.490893 364.704275 53.490893 659.304938Z"/> </svg> <div class=cp-volume-container> <div> <span class=cp-volume-controller> <span class=cp-volume-fill></span> <span class=cp-volume-controller-button></span> </span> </div> </div> </a> <a class=cp-list-button> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-list-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M168.57 820.6c0 14.34-9.56 23.89-23.89 23.89H96.89c-14.34 0-23.89-9.55-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89h47.79c14.34 0 23.89 9.56 23.89 23.89z m0-284.33c0 14.34-9.56 23.89-23.89 23.89H96.89c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89h47.79c14.34 0 23.89 9.56 23.89 23.89z m0-286.72c0 14.34-9.56 23.89-23.89 23.89H96.89c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89h47.79c14.34 0 23.89 9.56 23.89 23.89zM969 820.6c0 14.34-7.17 23.89-21.5 23.89H314.32c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89H945.1c14.34 0 23.89 9.56 23.89 23.89z m0-284.33c0 14.34-7.17 23.89-21.5 23.89H314.32c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89H945.1c14.34 0 23.89 9.56 23.89 23.89z m0-286.72c0 14.34-7.17 23.89-21.5 23.89H314.32c-14.34 0-23.89-9.56-23.89-23.89v-47.79c0-14.34 9.56-23.89 23.89-23.89H945.1c14.34 0 23.89 9.56 23.89 23.89z"/> </svg> </a> <a class=cp-mode-button data-mode=listloop> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-loop-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M157 624c17.3-4.8 27.4-22.7 22.6-40-5.4-19.4-8.1-39.5-8.1-59.9 0-123.1 100.1-223.2 223.2-223.2h302.4v57.6c0 18.5 12.9 25.6 28.6 15.9l138.6-85.8c15.7-9.7 15.9-25.9 0.3-35.9l-139.2-89.9c-15.5-10-28.2-3.1-28.2 15.4V236H394.7c-77 0-149.3 30-203.8 84.4-54.4 54.4-84.4 126.8-84.4 203.8 0 26.2 3.5 52.2 10.5 77.3 4 14.4 17.1 23.8 31.3 23.8 2.9-0.1 5.8-0.4 8.7-1.3z m748.7-202.1c-4-14.4-17.1-23.8-31.3-23.8-2.9 0-5.8 0.4-8.7 1.2-17.3 4.8-27.4 22.7-22.6 40 5.4 19.4 8.1 39.5 8.1 59.9 0 123.1-100.1 223.2-223.2 223.2H325.5v-57.6c0-18.5-12.9-25.6-28.6-15.9l-138.6 85.8c-15.7 9.7-15.9 25.9-0.3 35.9l139.2 89.9c15.5 10 28.2 3.1 28.2-15.4v-57.9h302.4c77 0 149.3-30 203.8-84.4C886 648.4 916 576 916 499c0.1-26-3.4-52-10.3-77.1z"/> </svg> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-single-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M102.5 653.9c17.3-4.8 27.4-22.7 22.6-40-5.4-19.4-8.1-43.4-8.1-63.8C117 427 217.1 323 340.2 323h132.3c1.4-20 5.4-40 11.7-60h-144c-77 0-149.4 31.4-203.8 85.8C82 403.2 52 476.3 52 553.3c0 26.2 3.5 52.6 10.5 77.6 4 14.4 17.1 24 31.3 24 2.9 0 5.8-0.2 8.7-1z m471 109.1H272v-68.3c0-18.5-13.3-25.6-29-15.9l-138.8 85.8c-15.7 9.7-16 25.9-0.5 35.9l139.7 89.9c15.5 10 28.7 3.1 28.7-15.4v-52h301.5c77 0 149.4-32.9 203.8-87.3 34.7-34.7 59.5-78.2 72.9-124-24 9-49.6 19.4-76.2 21.5-36.5 74-112.7 129.8-200.6 129.8zM752 127.9c-121.5 0-220 98.5-220 220s98.5 220 220 220 220-98.5 220-220-98.5-220-220-220zM792 463h-40V298.7c-20 14-36.2 24.5-60 31.3v-41.8c11.5-2.9 23.8-10.4 36.7-17.6 13-7.9 23.8-7.7 32.4-27.7H792V463z"/> </svg> <svg xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink class="cp-random-icon cp-icon-dark" viewBox="0 0 1024 1024" version=1.1> <path d="M112 405.2h218.2c7.1 0 21 5.8 26 10.8l38 38.6c13.6 13.8 35.7 13.9 49.5 0.4 13.8-13.6 13.9-35.7 0.4-49.5l-38-38.6c-18.1-18.4-50-31.7-75.8-31.7H112c-19.3 0-35 15.7-35 35 0 19.4 15.7 35 35 35z m623.2 0h62.4v42.6c0 10.9 7.5 15 16.7 8.8l125.8-83.9c9.3-6.2 9.2-16.2 0-22.4l-125.8-83.9c-9.3-6.2-16.7-2.2-16.7 8.8v60h-62.4c-53.5 0-123.5 29.3-161 67.4L393.9 585.7c-24.3 24.7-76.4 46.5-111.1 46.5H112c-19.3 0-35 15.7-35 35s15.7 35 35 35h170.7c53.5 0 123.5-29.3 161-67.4L624 451.7c24.4-24.7 76.4-46.5 111.2-46.5z m79.1 161.2c-9.3-6.2-16.7-2.2-16.7 8.8v57H681.9c-6.9 0-20.2-5.6-25-10.4l-37.3-37.9c-13.6-13.8-35.7-13.9-49.5-0.4-13.8 13.6-13.9 35.7-0.4 49.5l37.3 37.9c18 18.2 49.3 31.3 74.9 31.3h115.6v45.6c0 10.9 7.5 15 16.7 8.8L940 672.7c9.3-6.2 9.2-16.2 0-22.4l-125.7-83.9z"/> </svg> </a> <div class=cp-progress-container> <span class=cp-progress-current-time>07:24</span> <div class=cp-progress> <div class=cp-progress-fill></div> <span class=cp-progress-button></span> </div> <span class=cp-progress-duration>24:50</span> </div> </div> <div class="cp-drop-down-menu cp-drop-down-menu-info"> <div class=cp-audio-info> <span class=cp-audio-title></span> - <span class=cp-audio-artist></span> </div> <ul id=cp-playlist class=cp-playlist> </ul> </div> </c-player>'
	}, function(e, t) {
		e.exports =
			'<svg class=cp-play-icon viewBox="0 0 1024 1024" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink width=200 height=200> <path d="M64.279417 58.009844c0-21.327148 10.62092-39.540533 29.218194-50.118799a56.858178 56.858178 0 0 1 58.265769 0.255926l779.336659 453.969682c18.341348 10.706229 28.748996 28.748996 28.748996 49.905527 0 21.113877-10.407648 39.156645-28.748996 49.820219L151.76338 1015.854735a56.943486 56.943486 0 0 1-58.265769 0.255926 56.303672 56.303672 0 0 1-29.218194-50.161453V58.009844z"> </path> </svg>'
	}, function(e, t, n) {
		t = e.exports = n(20)(void 0), t.push([e.i,
			"@-webkit-keyframes miss-pointer-event {\n  0% {\n    pointer-events: none; }\n  50% {\n    pointer-events: none; }\n  100% {\n    pointer-events: auto; } }\n\n@keyframes miss-pointer-event {\n  0% {\n    pointer-events: none; }\n  50% {\n    pointer-events: none; }\n  100% {\n    pointer-events: auto; } }\n\nc-player {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  font-size: 12px;\n  width: 300px;\n  text-align: left; }\n  c-player .cp-mainbody {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-height: 4.16667em;\n    min-width: 25em;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background-color: #fff;\n    position: relative;\n    z-index: 1;\n    border-radius: 0.33333em;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; }\n    c-player .cp-mainbody > * {\n      margin-right: 0.58333em; }\n    c-player .cp-mainbody:hover + .cp-drop-down-menu.cp-drop-down-menu-info {\n      height: 2.08333em; }\n 	.cp-playlist{overflow-x: scroll !important;}  .cp-playlist{overflow-x:scroll!important}.cp-playlist::-webkit-scrollbar{width:4px;height:4px}.cp-playlist::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(214,23,193,1);background:rgba(0,0,0,0.2)}   c-player .cp-drop-down-menu {\n    margin: 0em 0.16667em 0;\n    display: block;\n    text-align: center;\n    font-size: 1em;\n    line-height: 2.08333em;\n    background-color: rgba(255, 255, 255, 0.6);\n    position: relative;\n    z-index: 0;\n    height: 0em;\n    overflow: hidden;\n    border-bottom-right-radius: 0.33333em;\n    border-bottom-left-radius: 0.33333em;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n    -webkit-transition: height 0.25s ease 0.1s, -webkit-transform 0.25s ease 0.1s;\n    transition: height 0.25s ease 0.1s, -webkit-transform 0.25s ease 0.1s;\n    transition: transform 0.25s ease 0.1s, height 0.25s ease 0.1s;\n    transition: transform 0.25s ease 0.1s, height 0.25s ease 0.1s, -webkit-transform 0.25s ease 0.1s; }\n    c-player .cp-drop-down-menu span.cp-audio-title {\n      max-width: 14.16667em;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    c-player .cp-drop-down-menu span.cp-audio-artist {\n      opacity: 0.6;\n      max-width: 8.33333em;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-top {\n      -webkit-box-ordinal-group: 0;\n          -ms-flex-order: -1;\n              order: -1; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-none {\n      display: none; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-bottom {\n      -webkit-box-ordinal-group: 2;\n          -ms-flex-order: 1;\n              order: 1; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-info .cp-playlist {\n      display: none; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-info:hover {\n      height: 2.08333em; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-playlist .cp-audio-info {\n      display: none; }\n    c-player .cp-drop-down-menu.cp-drop-down-menu-playlist {\n      height: auto; }\n  c-player .cp-playlist {\n height: inherit; \n overflow-x: hidden; \n   overflow-y: scroll;\n    margin: 0em;\n    padding: 0em;\n    list-style: none;\n    text-align: left; }\n    c-player .cp-playlist li {\n      padding: 0 0.83333em ;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      cursor: pointer; }\n      c-player .cp-playlist li .cp-play-icon {\n        display: inline-block;\n        width: 1em;\n        height: 1em;\n  vertical-align: text-top;\n        margin: 0px 0.8em 0 0;\n    fill: rgba(159, 56, 175, 0.9); }\n  c-player .cp-playlist-artist {\n    opacity: 0.46;  float: right }\n  c-player .cp-center-container {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    position: relative;\n    height: 4.16667em;\n    pointer-events: auto; }\n    c-player .cp-center-container .cp-controls {\n      opacity: 0; }\n    c-player .cp-center-container:hover .cp-controls {\n      opacity: 1;\n      -webkit-animation: miss-pointer-event 100ms;\n              animation: miss-pointer-event 100ms;\n      -webkit-animation-fill-mode: both;\n              animation-fill-mode: both; }\n    c-player .cp-center-container:hover .cp-lyric {\n      opacity: 0; }\n  c-player .cp-controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    -webkit-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease; }\n    c-player .cp-controls > * {\n      margin-right: 1.25em;\n      -webkit-tap-highlight-color: transparent; }\n  c-player .cp-lyric {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    position: absolute;\n    width: calc(100% - 1.66667em);\n    height: calc(100% - 0.83333em);\n    overflow: hidden;\n    margin: 0.41667em 0.83333em;\n    font-size: 1.16667em;\n    -webkit-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease; }\n  c-player .cp-lyric-text {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    white-space: nowrap;\n    text-align: center;\n    color: #424242; }\n    c-player .cp-lyric-text .cp-lyric-text-sub {\n      display: block;\n      color: #757575;\n      font-size: 0.85714em; }\n    c-player .cp-lyric-text .cp-lyric-text-zoomout {\n      font-size: 1em;\n      -webkit-transform: translateY(0.08333em);\n              transform: translateY(0.08333em);\n      display: inline-block;\n      margin: 0px 0.14286em; }\n  c-player .cp-progress-container {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    margin: 0em;\n    opacity: 0.8;\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    border-bottom-left-radius: 0.33333em;\n    border-bottom-right-radius: 0.33333em;\n    overflow: hidden;\n    pointer-events: none; }\n    c-player .cp-progress-container > span {\n      display: none; }\n  c-player.cp-big .cp-progress-container {\n    position: relative;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    height: 2.91667em;\n    padding: 0 0.41667em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    pointer-events: auto;\n    color: #424242; }\n    c-player.cp-big .cp-progress-container > span {\n      display: inline;\n      margin: 0 1.25em;\n      font-size: 0.8em; }\n  c-player .cp-progress {\n    overflow: hidden; }\n    c-player .cp-progress .cp-progress-fill {\n      display: block;\n      height: 0.16667em;\n      background: #F44336; }\n    c-player .cp-progress .cp-progress-button {\n      display: none; }\n  c-player.cp-big .cp-progress {\n    overflow: visible; }\n  c-player .cp-poster {\n    width: 4.16667em;\n    height: 4.16667em;\n    background-repeat: repeat;\n    background-position: 50% 50%;\n    background-size: cover;\n    background-color: #fafafa;\n    background-origin: padding-box;\n    background-attachment: scroll;\n    border-right: 0.08333em solid #eee;\n    background-image: url(" +
			n(1) +
			");\n   border-top-left-radius: 0.33333em;\n    border-bottom-left-radius: 0.33333em;\n    overflow: hidden; }\n    c-player .cp-poster video {\n      width: 100%;\n      height: 100%; }\n  c-player.cp-big .cp-poster {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    width: 25em;\n    height: 14.0625em;\n    border-right: none;\n    border-bottom: 0.08333em solid #eee;\n    margin: 0;\n    border-top-left-radius: 0.33333em;\n    border-bottom-left-radius: 0;\n    border-top-right-radius: 0.33333em;\n    border-bottom-right-radius: 0; }\n  c-player .cp-play-icon {\n    width: 1.04167em;\n    height: 1.04167em;\n    display: block;\n    overflow: hidden;\n    position: relative; }\n    c-player .cp-play-icon .cp-play-icon-left {\n      height: 100%;\n      float: left;\n      background-color: #F44336;\n      width: 36%;\n      -webkit-transition: width 0.25s ease;\n      transition: width 0.25s ease;\n      overflow: hidden; }\n    c-player .cp-play-icon .cp-play-icon-right {\n      height: 100%;\n      float: right;\n      background-color: #F44336;\n      width: 36%;\n      -webkit-transition: width 0.25s ease;\n      transition: width 0.25s ease;\n      overflow: hidden; }\n    c-player .cp-play-icon .cp-play-icon-triangle-1 {\n      -webkit-transform: translate(0, -100%);\n              transform: translate(0, -100%); }\n    c-player .cp-play-icon .cp-play-icon-triangle-2 {\n      -webkit-transform: translate(0, 100%);\n   transform: translate(0, 100%); }\n    c-player .cp-play-icon .cp-play-icon-triangle-1,\n    c-player .cp-play-icon .cp-play-icon-triangle-2 {\n      position: absolute;\n      top: 0;\n      right: 0;\n      background-color: transparent;\n      width: 0;\n      height: 0;\n      border-right: 1.04167em solid #fff;\n      border-top: 0.52083em solid transparent;\n      border-bottom: 0.52083em solid transparent;\n      -webkit-transition: -webkit-transform 0.25s ease;\n      transition: -webkit-transform 0.25s ease;\n      transition: transform 0.25s ease;\n      transition: transform 0.25s ease, -webkit-transform 0.25s ease; }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-left {\n      width: 50%; }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-right {\n      width: 50%; }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-triangle-1 {\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%); }\n    c-player .cp-play-icon.cp-play-icon-paused .cp-play-icon-triangle-2 {\n      -webkit-transform: translate(0, 50%);\n              transform: translate(0, 50%); }\n    c-player .cp-play-icon.cp-play-icon-hover .cp-play-icon-left, c-player .cp-play-button:hover .cp-play-icon-left {\n      background-color: #B71C1C; }\n    c-player .cp-play-icon.cp-play-icon-hover .cp-play-icon-right, c-player .cp-play-button:hover .cp-play-icon-right {\n      background-color: #B71C1C; }\n  c-player .cp-play-button,\n  c-player .cp-volume-button,\n  c-player .cp-prev-button,\n  c-player .cp-list-button,\n  c-player .cp-mode-button,\n  c-player .cp-next-button {\n    display: inline-block;\n    width: 1.04167em;\n    height: 1.04167em;\n    cursor: pointer; }\n  c-player .cp-volume-button {\n    width: 1.66667em;\n    position: relative; }\n  c-player .cp-list-button {\n    width: 1.45833em;\n    height: 1.45833em; }\n  c-player .cp-mode-button {\n    width: 1.58333em;\n    height: 1.58333em; }\n  c-player .cp-play-button {\n    height: 2.5em;\n    width: 2.5em;\n    border: #F44336 solid 1px;\n    border-radius: 50%; }\n    c-player .cp-play-button .cp-play-icon.cp-play-icon-paused {\n      margin: 0.6875em; }\n    c-player .cp-play-button .cp-play-icon {\n      margin: 0.6875em; }\n    c-player .cp-play-button:hover {\n      border-color: #B71C1C; }\n  c-player .cp-icon, c-player .cp-prev-icon, c-player .cp-next-icon, c-player .cp-volume-icon, c-player .cp-random-icon, c-player .cp-single-icon, c-player .cp-loop-icon, c-player .cp-list-icon {\n    height: 1.04167em;\n    width: 1.04167em; }\n    c-player .cp-icon path, c-player .cp-prev-icon path, c-player .cp-next-icon path, c-player .cp-volume-icon path, c-player .cp-random-icon path, c-player .cp-single-icon path, c-player .cp-loop-icon path, c-player .cp-list-icon path {\n      fill: #F44336; }\n    c-player .cp-icon:hover path, c-player .cp-prev-icon:hover path, c-player .cp-next-icon:hover path, c-player .cp-volume-icon:hover path, c-player .cp-random-icon:hover path, c-player .cp-single-icon:hover path, c-player .cp-loop-icon:hover path, c-player .cp-list-icon:hover path {\n      fill: #B71C1C; }\n    c-player .cp-icon.cp-icon-dark path, c-player .cp-icon-dark.cp-prev-icon path, c-player .cp-icon-dark.cp-next-icon path, c-player .cp-icon-dark.cp-volume-icon path, c-player .cp-icon-dark.cp-random-icon path, c-player .cp-icon-dark.cp-single-icon path, c-player .cp-icon-dark.cp-loop-icon path, c-player .cp-icon-dark.cp-list-icon path {\n      fill: #757575; }\n    c-player .cp-icon.cp-icon-dark:hover path, c-player .cp-icon-dark.cp-prev-icon:hover path, c-player .cp-icon-dark.cp-next-icon:hover path, c-player .cp-icon-dark.cp-volume-icon:hover path, c-player .cp-icon-dark.cp-random-icon:hover path, c-player .cp-icon-dark.cp-single-icon:hover path, c-player .cp-icon-dark.cp-loop-icon:hover path, c-player .cp-icon-dark.cp-list-icon:hover path {\n      fill: #616161; }\n  c-player .cp-next-icon {\n    -webkit-transform: rotateZ(180deg);\n            transform: rotateZ(180deg); }\n  c-player .cp-volume-icon {\n    width: 1.66667em; }\n  c-player .cp-random-icon,\n  c-player .cp-single-icon,\n  c-player .cp-loop-icon {\n    width: 1.58333em;\n    height: 1.58333em;\n    display: none; }\n  c-player .cp-mode-button[data-mode=listloop] .cp-loop-icon,\n  c-player .cp-mode-button[data-mode=singlecycle] .cp-single-icon,\n  c-player .cp-mode-button[data-mode=listrandom] .cp-random-icon {\n    display: block; }\n  c-player .cp-list-icon {\n    width: 1.45833em;\n    height: 1.45833em; }\n  c-player .cp-volume-container {\n    position: absolute;\n    left: 50%;\n    top: -7px;\n    height: 2.08333em;\n    width: 10.83333em;\n    -webkit-transform: translateX(-50%) translateY(-120%);\n            transform: translateX(-50%) translateY(-120%);\n    z-index: 1;\n    visibility: hidden;\n    text-align: left;\n    border-radius: 0.33333em;\n    padding: 0 15px;\n    background: #fff;\n    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; }\n    c-player .cp-volume-container.cp-volume-container-show {\n      visibility: visible; }\n    c-player .cp-volume-container:hover {\n      visibility: visible; }\n    c-player .cp-volume-container:before {\n      content: '';\n      width: 0em;\n      height: 0em;\n      display: inline-block;\n      border-top: 0.83333em solid #fff;\n      border-left: 0.83333em solid transparent;\n      border-right: 0.83333em solid transparent;\n      position: absolute;\n      bottom: 0em;\n      left: 50%;\n      -webkit-transform: translate(-50%, 100%);\n              transform: translate(-50%, 100%); }\n    c-player .cp-volume-container:after {\n      content: '';\n      width: 1.17851em;\n      height: 1.17851em;\n      display: inline-block;\n      position: absolute;\n      bottom: 0em;\n      left: 50%;\n      -webkit-transform: translate(-50%, 50%) rotate(45deg);\n              transform: translate(-50%, 50%) rotate(45deg);\n      -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n              box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px; }\n    c-player .cp-volume-container > div {\n      width: 100%;\n      height: 100%;\n      background: #fff;\n      border-radius: 0.33333em;\n      position: relative;\n      z-index: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  c-player.cp-big .cp-progress, c-player .cp-volume-controller, c-player.cp-dark.cp-big .cp-progress {\n    display: inline-block;\n    height: 0.33333em;\n    width: 100%;\n    border-radius: 0.16667em;\n    background: #BDBDBD;\n    line-height: 0;\n    -ms-touch-action: none;\n        touch-action: none;\n    position: relative; }\n    c-player.cp-big .cp-progress .cp-progress-fill, c-player .cp-volume-controller .cp-volume-fill, c-player.cp-dark.cp-big .cp-progress .cp-volume-controller .cp-volume-fill, c-player.cp-dark.cp-big .cp-volume-controller .cp-progress .cp-volume-fill, c-player.cp-dark.cp-big .cp-progress .cp-progress-fill {\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      border-radius: 0.16667em;\n      background: #616161; }\n    c-player.cp-big .cp-progress .cp-progress-button, c-player .cp-volume-controller .cp-volume-controller-button, c-player.cp-dark.cp-big .cp-progress .cp-volume-controller .cp-volume-controller-button, c-player.cp-dark.cp-big .cp-volume-controller .cp-progress .cp-volume-controller-button, c-player.cp-dark.cp-big .cp-progress .cp-progress-button {\n      height: 1.25em;\n      width: 1.25em;\n      position: absolute;\n      right: 0em;\n      top: -0.45833em;\n      display: inline-block;\n      border-radius: 50%;\n      border: 0.16667em solid #fff;\n      background: #757575;\n      -webkit-transform: translateX(50%);\n              transform: translateX(50%); }\n      c-player.cp-big .cp-progress .cp-progress-button:hover, c-player .cp-volume-controller .cp-volume-controller-button:hover {\n        background: #616161; }\n  c-player svg {\n    vertical-align: top; }\n  c-player *,\n  c-player *::before,\n  c-player *::after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\nc-player.cp-dark {\n  color: #bbb; }\n  c-player.cp-dark .cp-mainbody {\n    background-color: #222; }\n  c-player.cp-dark .cp-drop-down-menu {\n    background-color: rgba(34, 34, 34, 0.9); }\n  c-player.cp-dark .cp-playlist li .cp-play-icon {\n    fill: rgba(189, 189, 189, 0.8); }\n  c-player.cp-dark .cp-lyric-text {\n    color: #bbb; }\n    c-player.cp-dark .cp-lyric-text .cp-lyric-text-sub {\n      color: #757575; }\n  c-player.cp-dark .cp-progress .cp-progress-fill {\n    background: #BDBDBD; }\n  c-player.cp-dark .cp-poster {\n    background-color: #333;\n    border-right-color: #333; }\n  c-player.cp-dark.cp-big .cp-poster {\n    border-bottom-color: #333; }\n  c-player.cp-dark.cp-big .cp-progress-container {\n    color: #bbb; }\n  c-player.cp-dark.cp-big .cp-progress {\n    overflow: visible; }\n  c-player.cp-dark .cp-play-icon .cp-play-icon-left {\n    background-color: #a1a1a1; }\n  c-player.cp-dark .cp-play-icon .cp-play-icon-right {\n    background-color: #a1a1a1; }\n  c-player.cp-dark .cp-play-icon .cp-play-icon-triangle-1,\n  c-player.cp-dark .cp-play-icon .cp-play-icon-triangle-2 {\n    border-right-color: #222; }\n  c-player.cp-dark .cp-play-icon.cp-play-icon-hover .cp-play-icon-left, c-player.cp-dark .cp-play-button:hover .cp-play-icon-left {\n    background-color: #BDBDBD; }\n  c-player.cp-dark .cp-play-icon.cp-play-icon-hover .cp-play-icon-right, c-player.cp-dark .cp-play-button:hover .cp-play-icon-right {\n    background-color: #BDBDBD; }\n  c-player.cp-dark .cp-play-button {\n    border-color: #a1a1a1; }\n    c-player.cp-dark .cp-play-button:hover {\n      border-color: #BDBDBD; }\n  c-player.cp-dark .cp-icon path, c-player.cp-dark .cp-prev-icon path, c-player.cp-dark .cp-next-icon path, c-player.cp-dark .cp-volume-icon path, c-player.cp-dark .cp-random-icon path, c-player.cp-dark .cp-single-icon path, c-player.cp-dark .cp-loop-icon path, c-player.cp-dark .cp-list-icon path {\n    fill: #a1a1a1; }\n  c-player.cp-dark .cp-icon:hover path, c-player.cp-dark .cp-prev-icon:hover path, c-player.cp-dark .cp-next-icon:hover path, c-player.cp-dark .cp-volume-icon:hover path, c-player.cp-dark .cp-random-icon:hover path, c-player.cp-dark .cp-single-icon:hover path, c-player.cp-dark .cp-loop-icon:hover path, c-player.cp-dark .cp-list-icon:hover path {\n    fill: #BDBDBD; }\n  c-player.cp-dark .cp-icon.cp-icon-dark path, c-player.cp-dark .cp-icon-dark.cp-prev-icon path, c-player.cp-dark .cp-icon-dark.cp-next-icon path, c-player.cp-dark .cp-icon-dark.cp-volume-icon path, c-player.cp-dark .cp-icon-dark.cp-random-icon path, c-player.cp-dark .cp-icon-dark.cp-single-icon path, c-player.cp-dark .cp-icon-dark.cp-loop-icon path, c-player.cp-dark .cp-icon-dark.cp-list-icon path {\n    fill: #757575; }\n  c-player.cp-dark .cp-icon.cp-icon-dark:hover path, c-player.cp-dark .cp-icon-dark.cp-prev-icon:hover path, c-player.cp-dark .cp-icon-dark.cp-next-icon:hover path, c-player.cp-dark .cp-icon-dark.cp-volume-icon:hover path, c-player.cp-dark .cp-icon-dark.cp-random-icon:hover path, c-player.cp-dark .cp-icon-dark.cp-single-icon:hover path, c-player.cp-dark .cp-icon-dark.cp-loop-icon:hover path, c-player.cp-dark .cp-icon-dark.cp-list-icon:hover path {\n    fill: #616161; }\n  c-player.cp-dark .cp-volume-container {\n    background: #222; }\n    c-player.cp-dark .cp-volume-container:before {\n      border-top-color: #222; }\n    c-player.cp-dark .cp-volume-container > div {\n      background: #222; }\n  c-player.cp-dark c-player.cp-big .cp-progress, c-player.cp-big c-player.cp-dark .cp-progress, c-player.cp-dark .cp-volume-controller, c-player.cp-dark.cp-big .cp-progress {\n    background: #616161; }\n    c-player.cp-dark c-player.cp-big .cp-progress .cp-progress-fill, c-player.cp-big c-player.cp-dark .cp-progress .cp-progress-fill, c-player.cp-big .cp-progress c-player.cp-dark .cp-volume-controller .cp-progress-fill, c-player.cp-dark .cp-volume-controller .cp-volume-fill, c-player.cp-dark.cp-big .cp-progress .cp-progress-fill {\n      background: #BDBDBD; }\n    c-player.cp-dark c-player.cp-big .cp-progress .cp-progress-button, c-player.cp-big c-player.cp-dark .cp-progress .cp-progress-button, c-player.cp-big .cp-progress c-player.cp-dark .cp-volume-controller .cp-progress-button, c-player.cp-dark .cp-volume-controller .cp-volume-controller-button, c-player.cp-dark.cp-big .cp-progress .cp-progress-button {\n      border-color: #222;\n      background: #757575; }\n      c-player.cp-dark c-player.cp-big .cp-progress .cp-progress-button:hover, c-player.cp-big c-player.cp-dark .cp-progress .cp-progress-button:hover, c-player.cp-big .cp-progress c-player.cp-dark .cp-volume-controller .cp-progress-button:hover, c-player.cp-dark .cp-volume-controller .cp-volume-controller-button:hover, c-player.cp-dark.cp-big .cp-progress .cp-progress-button:hover {\n        background: #BDBDBD; }\n  .cp-playlist>li{border-top:1px solid #e9e9e9;cursor:pointer;transition:all .5s ease;overflow:hidden;overflow-x:hidden;overflow-y:hidden;margin:0;height:2em}   .cp-playlist-li-active{border-top:1px solid #FDA1FF;cursor:pointer;transition:all .5s ease;overflow:hidden;overflow-x:hidden;overflow-y:hidden;margin:0} ",
			""
		])
	}, function(e, t) {
		function n(e, t) {
			var n = e[1] || "",
				o = e[3];
			if (!o) return n;
			if (t && "function" == typeof btoa) {
				var r = i(o);
				return [n].concat(o.sources.map(function(e) {
					return "/*# sourceURL=" + o.sourceRoot + e + " */"
				})).concat([r]).join("\n")
			}
			return [n].join("\n")
		}

		function i(e) {
			return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(
				JSON.stringify(e)))) + " */"
		}
		e.exports = function(e) {
			var t = [];
			return t.toString = function() {
				return this.map(function(t) {
					var i = n(t, e);
					return t[2] ? "@media " + t[2] + "{" + i + "}" : i
				}).join("")
			}, t.i = function(e, n) {
				"string" == typeof e && (e = [
					[null, e, ""]
				]);
				for (var i = {}, o = 0; o < this.length; o++) {
					var r = this[o][0];
					"number" == typeof r && (i[r] = !0)
				}
				for (o = 0; o < e.length; o++) {
					var a = e[o];
					"number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
						t.push(a))
				}
			}, t
		}
	}])
});
//# sourceMappingURL=cplayer.js.map
