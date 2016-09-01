/**
 * @file This is a tag plugin for the Hexo static site generator.
 * @copyright Chathu Vishwajith 2015-2016
 * @author Chathu Vishwajith
 * @license MIT
 */
hexo.extend.tag.register('apester', function(args) {

  var interactionId = args[0];

  var apesterTag = '<interaction id="' + interactionId +
      '">' +
      '</interaction>';

  return apesterTag;
});
