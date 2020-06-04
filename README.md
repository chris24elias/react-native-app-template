## Includes

- React-native 0.62
- React-Navigation v5
- easy-peasy for state management
- redux-persist for data persistence
- Reactotron and Flipper for debugging
- React Native UI Kitten for UI Library and Theming (eva design)
- Theming using hooks!
- Built in Authentication Flow
- Built in 60fps Animated Tab Bar
- Unit tests

## Getting Started

**Step 1:** Clone and Install

```sh

$ git clone https://github.com/chris24elias/react-native-app-template.git

$ cd react-native-app-template

$ rm -rf ./.git

$ yarn

```

**Step 2:** Rename the app [react-native-rename](https://github.com/junedomingo/react-native-rename#installation)

```sh

$ yarn global add react-native-rename

$ react-native-rename <newName>

```

**Step 3:** Rename XCode Project Completely

<img src="Screenshots/Howtorenamexcodeproject.png"/>

https://stackoverflow.com/questions/33370175/how-do-i-completely-rename-an-xcode-project-i-e-inclusive-of-folders

A quicker solution using shell commands (works with CocoaPods too):
PLEASE cd TO A NON-GIT REPOSITORY BEFORE PROCEEDING ⚠️

Step 1 - Prerequisites
Copy your original project folder to a temporary /NewProjectFolder OUTSIDE your git repository. ⚠️ changes to .git could corrupt your git index 💥 ☠
Step 2 - Open Terminal
Now we're going to rename the project from oldName to NewProject.

Close XCode.
Go to your /NewProjectFolder.

```sh
cd /Path/to/your/NewProjectFolder
```

Install the extra tools needed.

```sh
brew install rename ack
```

Rename the files and directories containing the source string. You’ll need to RUN THIS COMMAND TWICE, because directories will be renamed first, then files and directories inside those will be renamed on the next iteration.

```sh
find . -name 'oldName*' -print0 | xargs -0 rename --subst-all 'oldName' 'NewProject'
```

Check if all the files containing the source string are renamed. You should see empty output.

```sh
find . -name 'oldName*'
```

Replace all occurrences of the string in all files.

```sh
ack --literal --files-with-matches 'oldName' --print0 | xargs -0 sed -i '' 's/oldName/NewProject/g'
```

Check if all occurrences of the string in all files were replaced. You should see empty output.

```sh
ack --literal 'oldName'
```

Run pod install
Add NewProjectFolder to your repository.
You are done!
