This package is based off a fork of [flow-routing][1] that is meant for working with React. As in, Blaze support has been removed.

Under the hood, it uses [react-mounter][2] and [blaze-react-component][3] to enable the same functionality as [flow-routing][1], so please check their docs for usage. There's only one change you need to know about: you can omit the `defaultLayoutType` field in `AccountsTemplates.configure`. Everything else should work the same.


[1]: https://atmospherejs.com/useraccounts/flow-routing
[2]: https://github.com/kadirahq/react-mounter
[3]: https://atmospherejs.com/gadicc/blaze-react-component
