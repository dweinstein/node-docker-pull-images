[![NPM](https://nodei.co/npm/docker-pull-images.png)](https://nodei.co/npm/docker-pull-images/)

[![npm version](https://badge.fury.io/js/docker-pull-images.svg)](http://badge.fury.io/js/docker-pull-images)

# SYNOPSIS

Pull images using `child_process.spawn` of docker client.

# USAGE

Example images input (e.g., file named `images.json`):

```
  Options:
      -i, --infile  [path]    path to json images to pull.
      -h, --help              help
```


```json
[
  {
    "name": "registry.foo.bar/thing/foo",
    "tag": "dev"
  }
]
```

`$ pull-images --infile images.json`
