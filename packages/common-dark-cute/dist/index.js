function setBackVideo(config) {
  /**
   * 根据 html 字符串创建 Element 元素
   * @param str html 字符串
   * @returns 创建的 Element 元素
   */
  function createElByString(str) {
    const root = document.createElement('div');
    root.innerHTML = str;
    return root.querySelector('*') 
  }

  const $videoEl = createElByString(`<video
  id="videoWallPaper"
  muted="muted"
  loop="loop"
  autoplay="autoplay"
  src="${config.videoUrl}"
/>
`);
  GM_addStyle(`video#videoWallPaper {
  position: fixed;
  right: 0;
  bottom: 0;

  min-width: 100%;
  min-height: 100%;

  width: auto;
  height: auto;
  z-index: -100;

  background-image: url(${config.imageUrl || ''});
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.5);
}
`);
  document.body.appendChild($videoEl);
}

export { setBackVideo };
