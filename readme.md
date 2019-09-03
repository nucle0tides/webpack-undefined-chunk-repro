
### Repro Steps
1. Run ``` yarn start ```
1. Navigate to ``` http://localhost:300 ```
1. Click "Start over"
1. App will navigate 3 times
1. Stack trace will show up

### Noteworthy code:
src/server/index.js:13
```javascript
serverApp.use("/modulea~moduleb.js", (req, res, next) => {
	setTimeout(next, 5000);
});

```

src/App/App.js:32
```javascript
if (window.location.href.endsWith("test")) {
    setTimeout(this.navigate("/test/A", "First - A"), 1000);

    setTimeout(this.navigate("/test/B", "First - B"), 2000);

    setTimeout(this.navigate("/test/A", "Second - A"), 3000);
}
```