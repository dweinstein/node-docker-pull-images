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
    "name": "registry.nowsecure.io/viaforensics/vmatrix-ios-static",
    "tag": "dev"
  }
]
```

`$ pull-images --infile images.json`
