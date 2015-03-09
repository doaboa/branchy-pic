Branchy Pic
-----------

Branchy-pic helps you display dynamic status badges that are relevant to the branch being viewed. This is especially useful for long-running dev branches.

### Example

For codeship, your status badge has a URL like this

    https://codeship.com/projects/YOUR_UUID/status?branch=master

To work with branchy-pic, specify this as a redirect URL and add a branch placeholder

    http://branchy-pic.herokuapp.com/?redirect=https://codeship.com/projects/YOUR_UUID/status?branch={branch}

On the `master` branch, this URL redirects to

    https://codeship.com/projects/YOUR_UUID/status?branch=master

On a branch called `staging`, it redirects to

    https://codeship.com/projects/YOUR_UUID/status?branch=staging

__BAM!__ You has dynamic status badges.