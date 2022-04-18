function _0x3f81(t, n) {
  const e = _0x29fb();
  return (_0x3f81 = function (t, n) {
    return e[(t -= 416)];
  })(t, n);
}

function _0x1640() {
  const t = _0x3f81,
    n = _0xe14b,
    e = [
      n(249),
      t(417),
      "then",
      n(235),
      n(257),
      n(242),
      n(250),
      n(240),
      n(241),
      n(232),
      n(245),
      n(238),
      n(223),
      n(248),
      n(236),
      n(246),
      n(229),
      n(222),
      n(237),
      n(244),
      n(259),
      t(458),
      t(424),
      t(459),
    ];
  return (_0x1640 = function () {
    return e;
  })();
}

function clearHistory(t) {
  const n = _0x32ae;
  localStorage.removeItem(t), (workspace.innerHtml = "");
}

function _0x32ae(t, n) {
  const e = _0x1640();
  return (_0x32ae = function (t, n) {
    return e[(t -= 381)];
  })(t, n);
}

function _0x30f4() {
  const t = _0x3f81,
    n = [
      t(447),
      "parse",
      "style",
      t(428),
      "backgroundImage",
      t(444),
      t(439),
      "7376480sbngje",
      t(421),
      t(452),
      t(434),
      t(448),
      t(435),
      t(437),
      t(431),
      t(456),
      "2546918XIjfLF",
      t(419),
      t(436),
      t(446),
      "getItem",
      t(433),
      t(441),
      t(426),
      t(430),
      t(449),
      "172kMSXRf",
      t(440),
      t(425),
      t(445),
      "2OPnPMn",
      "7529571LlxHDs",
      t(450),
      "stringify",
      "getElementById",
      t(453),
      t(416),
      t(438),
    ];
  return (_0x30f4 = function () {
    return n;
  })();
}

function _0xe14b(t, n) {
  const e = _0x30f4();
  return (_0xe14b = function (t, n) {
    return e[(t -= 222)];
  })(t, n);
}

function closeModal() {
  const t = _0x3f81;
  document.getElementById("alert__container").remove();
}

function appendHistory(t, n, e) {
  const r = _0x3f81,
    a = _0xe14b,
    o = _0x32ae;
  let s = {
    timestamp: new Date().getTime(),
    command: n,
    output: e,
  };
  try {
    if (null === localStorage.getItem("callHistory"))
      localStorage.setItem("callHistory", JSON.stringify([s])),
        console.log("storage initialized");
    else {
      let n = JSON.parse(localStorage["callHistory"]);
      n.push(s), localStorage.setItem(t, JSON.stringify(n));
    }
  } finally {
    (commandHistory = JSON.parse(localStorage.getItem(t))), renderCommands();
  }
}

function _0x29fb() {
  const t = [
    "remove",
    "870CCAcyv",
    "800cTwwca",
    "3TteoHH",
    "main__container",
    "42871jjpCFV",
    "2988503gaZaRR",
    "11CgsfnW",
    "catch",
    "48NDIgSn",
    "7376537ynNoMc",
    "434755Usunld",
    "Something went wrong while fetching the image",
    "3972004EBmqWS",
    "setItem",
    "136BtbsoX",
    "8595075tFmyTv",
    "297717wCopFc",
    "removeItem",
    "replace",
    "34602876tuDrHe",
    "1113273tBNeSc",
    "innerHTML",
    "getTime",
    "error",
    "/getB64Img?url=",
    "4140862WJbftE",
    "shift",
    "2679StDyES",
    "alert__container",
    "166103OGbpTW",
    "log",
    "2pVRXkv",
    "10rUhjFj",
    "push",
    "8wbNQHk",
    "storage initialized",
    "6rxMtbw",
    "51900uuugCP",
    "52226YhqHKs",
    "text",
    "4419810ZahqbU",
    "4139470ydwEeH",
    "2803840hhWAYs",
    "273591HYVCCx",
  ];
  return (_0x29fb = function () {
    return t;
  })();
}

async function getImage(t) {
  const n = _0xe14b,
    e = _0x32ae;
  let r = document.getElementById("main__container");
  fetch("/getB64Img?url=" + t)
    .then((t) => {
      const n = e;
      t.text().then((t) => {
        const e = _0xe14b,
          a = n;
        r.style.backgroundImages =
          "url(data:image/jpeg;base64," + t.replace(/(\r\n|\n|\r)/gm, "") + ")";
      });
    })
    .catch(() => {
      const t = n;
      console.error("Something went wrong while fetching the image");
    });
}

(function (t, n) {
  const e = _0x3f81,
    r = _0x29fb();
  for (;;)
    try {
      if (
        911994 ===
        parseInt(e(427)) / 1 +
          (-parseInt(e(454)) / 2) * (parseInt(e(443)) / 3) +
          -parseInt(e(420)) / 4 +
          (parseInt(e(423)) / 5) * (-parseInt(e(460)) / 6) +
          (-parseInt(e(432)) / 7) * (-parseInt(e(457)) / 8) +
          (-parseInt(e(418)) / 9) * (parseInt(e(455)) / 10) +
          (-parseInt(e(429)) / 11) * (-parseInt(e(442)) / 12)
      )
        break;
      r.push(r.shift());
    } catch (t) {
      r.push(r.shift());
    }
})(),
  (function (t, n) {
    const e = _0x3f81,
      r = _0xe14b,
      a = _0x30f4();
    for (;;)
      try {
        if (
          609200 ===
          (-parseInt(r(239)) / 1) * (parseInt(r(233)) / 2) +
            (-parseInt(r(231)) / 3) * (parseInt(r(253)) / 4) +
            (-parseInt(r(224)) / 5) * (parseInt(r(255)) / 6) +
            (-parseInt(r(247)) / 7) * (-parseInt(r(254)) / 8) +
            parseInt(r(234)) / 9 +
            parseInt(r(258)) / 10 +
            parseInt(r(252)) / 11
        )
          break;
        a[e(456)](a[e(449)]());
      } catch (t) {
        a[e(456)](a[e(449)]());
      }
  })(),
  (function (t, n) {
    const e = _0x3f81,
      r = _0xe14b,
      a = _0x32ae,
      o = _0x1640();
    for (;;)
      try {
        if (
          927981 ===
          -parseInt(a(400)) / 1 +
            parseInt(a(398)) / 2 +
            (parseInt(a(397)) / 3) * (parseInt(a(386)) / 4) +
            parseInt(a(401)) / 5 +
            (-parseInt(a(393)) / 6) * (parseInt(a(389)) / 7) +
            parseInt(a(383)) / 8 +
            (parseInt(a(394)) / 9) * (-parseInt(a(392)) / 10)
        )
          break;
        o[r(256)](o[r(228)]());
      } catch (t) {
        o[r(256)](o[e(449)]());
      }
  })();
