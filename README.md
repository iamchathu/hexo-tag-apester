# hexo-tag-apester

[![npm version](https://badge.fury.io/js/hexo-tag-apester.svg)](https://badge.fury.io/js/hexo-tag-apester)
[![Known Vulnerabilities](https://snyk.io/test/github/iamchathu/hexo-tag-apester/2c5aa1b11db032b48c884dea62e8375dc56d39fb/badge.svg)](https://snyk.io/test/github/iamchathu/hexo-tag-apester/2c5aa1b11db032b48c884dea62e8375dc56d39fb)
[![NSP Status](https://nodesecurity.io/orgs/iamchathu/projects/43ee5bf5-886c-4a5c-a6f5-879773cca6b1/badge)](https://nodesecurity.io/orgs/iamchathu/projects/43ee5bf5-886c-4a5c-a6f5-879773cca6b1)

Apester interactive tag plugin to include in Hexo page/post

# About

This is a [Hexo](https://hexo.io) tag plugin for including a [Apester](http://apester.com) widget into your pages/posts. Examples of what they can look like are below:


# Installation
The same as other Hexo plugins its simply:

```npm install --save hexo-tag-apester```

In your Hexo project root.

# Including JS

Include the Apester JS SDK on your page once before the `</head>` tag

```html
<script type="text/javascript" src="//static.apester.com/js/sdk/v1.1/apester-sdk.min.js"></script>
```

# Usage

The full tag format is as follows:

```
{% apester interaction_id %}
```

# Blog Articles explaining the tweetable quote plugin
- [Adding tweetable quote to hexo blog](https://chathu.me/2017/08/24/adding-tweetable-quote-to-hexo-blog/) - Adding tweetable quote to hexo blog.


# Example in the Wild
I normally add Apester quizes to my blog posts.

You can check one of them at [Chathu's Visionaries](http://chathu.me/2015/09/30/codeIgniter-3-session-file-driver/)

