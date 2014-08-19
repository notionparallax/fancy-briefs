fancy-briefs
============

Dev
===

A Dockerfile using gulp will likely be added in the future but for now this has most of our needs.

```
docker pull dockerfile/nodejs-bower-grunt
```

Install the bower components via:

```
docker run --rm -it -v `pwd`:/data dockerfile/nodejs-bower-grunt bower --allow-root install
```
