(() => {
  const shapes={
    statue:'<path fill="#68988b" d="M7 4h4v3H7zM6 7h6v6H6zM3 5h2v5H3zM3 2h2v3H3zM6 13h8v3H6z"/><path fill="#edc76a" d="M2 0h4v2H2z"/><path fill="#50756c" d="M7 2h1v2H7zm3 0h1v2h-1z"/>',
    home:'<path fill="#9a6450" d="M1 7h2V5h2V3h6v2h2v2h2v2H1z"/><path fill="#d2a47b" d="M3 9h10v6H3z"/><path fill="#477588" d="M5 10h2v2H5zm4 0h2v2H9z"/><path fill="#655448" d="M7 12h2v3H7z"/>',
    park:'<path fill="#8a6c44" d="M7 9h2v6H7z"/><path fill="#53885a" d="M5 1h6v2h2v3h2v4H1V6h2V3h2z"/><path fill="#83b36e" d="M5 3h4v2H5z"/>',
    garden:'<path fill="#59935e" d="M7 6h2v8H7zm-4 3h4v2H3zm6-1h4v2H9z"/><path fill="#e1b158" d="M5 1h6v2h2v4h-2v2H5V7H3V3h2z"/><path fill="#b77b53" d="M6 3h4v4H6z"/><path fill="#b48968" d="M3 13h10v3H3z"/>',
    bridge:'<path fill="#718b90" d="M2 3h3v10H2zm9 0h3v10h-3zM0 10h16v3H0z"/><path fill="#b4cad0" d="M5 5h6v2H5zm-3 0h2v2H2zm10 0h2v2h-2z"/><path fill="#4f84a0" d="M0 14h16v2H0z"/>',
    building:'<path fill="#697e89" d="M3 7h4V3h2V1h2v3h2v11H3z"/><path fill="#cbe0d2" d="M9 5h2v2H9zm0 4h2v2H9zm-4 0h2v2H5zm0 4h2v2H5zm4 0h2v2H9z"/>',
    station:'<path fill="#bb9f78" d="M1 5h14v2H1zm1 2h2v7H2zm5 0h2v7H7zm5 0h2v7h-2zM0 14h16v2H0z"/><path fill="#8d775d" d="M3 3h10v2H3zm3-2h4v2H6z"/>',
    museum:'<path fill="#b2a581" d="M1 5h14v2H1zm1 3h2v5H2zm5 0h2v5H7zm5 0h2v5h-2zM0 14h16v2H0z"/><path fill="#6c8076" d="M3 3h10v2H3zm3-2h4v2H6z"/>',
    stadium:'<path fill="#9d8a75" d="M3 2h10v2h2v9h-2v2H3v-2H1V4h2z"/><path fill="#f2e8c7" d="M4 5h8v6H4z"/><path fill="#548a61" d="M5 6h6v4H5z"/>',
    ferry:'<path fill="#b8865d" d="M3 4h10v7H3z"/><path fill="#f6ead0" d="M2 3h12v2H2zm2 3h2v2H4zm3 0h2v2H7zm3 0h2v2h-2z"/><path fill="#577a8c" d="M0 11h16v2h-2v2H2v-2H0z"/>',
    globe:'<path fill="#548ca6" d="M5 1h6v2h3v3h1v5h-1v2h-3v2H5v-2H2v-2H1V6h1V3h3z"/><path fill="#c8ddd4" d="M7 1h2v14H7zM1 7h14v2H1zM3 3h10v1H3zm0 9h10v1H3z"/>',
    wheel:'<path fill="#ce6855" d="M5 1h6v2h3v3h1v5h-1v2h-3v2H5v-2H2v-2H1V6h1V3h3z"/><path fill="#f4d37a" d="M7 3h2v10H7zM3 7h10v2H3z"/><path fill="#647f89" d="M6 12h4v4H6z"/>',
    beach:'<path fill="#e3b96b" d="M0 12h16v4H0z"/><path fill="#cf715a" d="M3 5h10v2H3zm2-2h6v2H5z"/><path fill="#8c7250" d="M7 7h2v7H7z"/><path fill="#5896b0" d="M0 10h5v2H0zm11 0h5v2h-5z"/>',
    fort:'<path fill="#8f8b7b" d="M1 3h4v3h6V3h4v12H1z"/><path fill="#565f5b" d="M6 10h4v5H6zm-3-3h2v2H3zm8 0h2v2h-2z"/>',
    zoo:'<path fill="#96744f" d="M2 3h3v4H2zm4-2h3v4H6zm4 0h3v4h-3zm3 3h3v4h-3zM4 9h7v2h2v4H2v-4h2z"/>'
  };
  window.GorillaIcons={body:key=>shapes[key]||shapes.home,svg:key=>'<svg viewBox="0 0 16 16" aria-hidden="true" shape-rendering="crispEdges">'+(shapes[key]||shapes.home)+'</svg>'};
})();
