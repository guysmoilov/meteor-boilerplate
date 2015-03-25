// http://gist.github.com/guysmoilov/fcf7902890127c2dd78c

observeMutationsHelper = function(targetSelector, done, callback) {
  var target = document.querySelector(targetSelector);
  var observer = new MutationObserver(function(mutations) {
    callback(mutations);
    observer.disconnect();
    done();
  });
  var config = {
    attributes: true,
    childList: true,
    characterData: true
  };
  observer.observe(target, config);
};
