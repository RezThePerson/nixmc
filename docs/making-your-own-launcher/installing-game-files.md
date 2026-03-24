# Installing the game files

## jar

1. from the `game_manifest.json` find the `downloads.client.url` field
2. use the field and fetch the jar
3. verify a correct fetch using the sha1 from the `downloads.client.sha1` field
4. if correct then save it, else try again

## libraries

for each `library` from the `libraries` array from the `game_manifest.json` file do:

1. check `library.name` and if you have already downloaded the library for a different instance (you may maintain a `downloaded_libraries.json` to keep track)
2. if yes then skip to next the library

3. check if `library.rules` exists, if it does then check if `library.rules[0].os.name` is the os the user is on.
4. if the rule exists and the user is not on the same os then skip to next the library

5. fetch the file from `library.downloads.artifact.url`
6. verify a correct fetch using the sha1 from the `library.downloads.artifact.sha1` field
7. if not correct then try again

8. save the fetch to the path mentioned in `library.downloads.artifact.path` inside the libraries folder
9. list it in the `downloaded_libraries.json`

## assets

1. from the `game_manifest.json` find the `assetIndex.url` field
2. use the field and fetch the json (will refer to as `asset_index.json`)
3. verify a correct fetch using the sha1 from the `downloads.client.sha1` field
4. if not correct, try again

for each `asset` from the `objects` array from the `asset_index.json` file do:

1. check the assets and if you have already downloaded a file to `assets folder/<first 2 letter of the hash>/<full hash>` (without any file extensions) for a different instance (alternatively maintain a `downloaded_assets.json` instead of checking if the file exists)
2. if yes then skip to next the asset

3. fetch the file from `https://resources.download.minecraft.net/<first 2 letter of the hash>/<full hash>` (without any file extensions)
4. verify a correct fetch using the sha1 from the `asset.hash` field
5. if not correct then try again

6. save the fetch to `<first 2 letter of the hash>/<full hash>` (without any file extensions) inside the libraries folder (if you have a `downloaded_assets.json` then list it there)
