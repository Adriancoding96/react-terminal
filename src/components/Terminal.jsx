import { useState, useEffect } from "react";
import InformationBox from "./InformationBox";

const directories = {
  root: [
    "about-me",
    "[backend]",
    "[frontend]",
    "[lowcode]",
    "[devops]",
    "[misc]",
    "launch-GUI",
  ],
  backend: ["[java]", "[springboot]", "[rust]", "[sql]"],
  frontend: ["[javascript]", "[html]", "[css]", "[react]"],
  lowcode: ["[outsystems]"],
  devops: ["[aws]", "[git]"],
};

const toggleVisibility = () => {
  const elementsToShow = document.querySelectorAll(".show");
  const elementsToHide = document.querySelectorAll(".hide");

  elementsToShow.forEach((element) => {
    if (element.classList.contains("show")) {
      element.classList.remove("show");
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
      element.classList.add("show");
    }
  });

  elementsToHide.forEach((element) => {
    if (element.classList.contains("hide")) {
      element.classList.remove("hide");
      element.classList.add("show");
    } else {
      element.classList.remove("show");
      element.classList.add("hide");
    }
  });
};

toggleVisibility();

const listDirectories = (currentDir) => {
  if (directories[currentDir]) {
    return directories[currentDir].map((dir) => `\n$ ${dir}`).join("");
  } else {
    return "\n$ Directory not recognised";
  }
};

const clearScreen = () => "";

const changeDirectory = (directory) => {
  console.log(directory);
  if (
    directory === "root" ||
    directory === "backend" ||
    directory === "frontend" ||
    directory === "lowcode" ||
    directory === "devops" ||
    directory === "misc"
  ) {
    return directory;
  } else {
    return null;
  }
};

const invalidCommand = () => "\n$ Invalid command";

const command = (input, currentDir, prevDir) => {
  switch (input) {
    case "ls":
      return listDirectories(currentDir);
    case "clear":
      return clearScreen();
    case "..":
      return changeDirectory(prevDir);
    case "cd root":
      return changeDirectory("root");
    case "cd backend":
      return changeDirectory("backend");
    case "cd frontend":
      return changeDirectory("frontend");
    case "cd lowcode":
      return changeDirectory("lowcode");
    case "cd misc":
      return changeDirectory("misc");
    case "nc about-me":
      toggleVisibility();
    default:
      return invalidCommand();
  }
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [currentDir, setCurrentDir] = useState("root");
  const [prevDir, setPrevDir] = useState("root");
  const prompt = "NilssonNexus";

  const handleEnterKeyPress = (e) => {
    if (e.key !== "Enter") return;

    setPrevDir(currentDir);

    if (input === "clear") {
      clearOutputAndInput();
      return;
    }

    if (input.startsWith("cd")) {
      handleCdCommand();
    } else if (input === "..") {
      handleCdToPreviousDirectory();
    } else {
      handleRegularCommand();
    }

    setInput("");
  };

  const clearOutputAndInput = () => {
    setOutput("");
    setInput("");
  };

  const handleCdCommand = () => {
    setPrevDir(currentDir);
    const newDir = input.split(" ").pop();
    const changedDir = changeDirectory(newDir);
    if (changedDir) {
      setCurrentDir(changedDir);
    } else {
      setOutput("\n$ Directory not recognised");
    }
  };

  const handleCdToPreviousDirectory = () => {
    const changedDir = changeDirectory(prevDir);
    if (changedDir) {
      setCurrentDir(changedDir);
    } else {
      setOutput("\n$ Directory not recognised");
    }
  };

  const handleRegularCommand = () => {
    let newOutput = output + command(input, currentDir, prevDir);
    setOutput(newOutput);
  };

  return (
    <div>
      <div className="row">
        <div className="column left">
          <div>
            <h1 className="prompt">{prompt}</h1>
          </div>
          <div className="terminal">
            -- {currentDir} -- {output}
          </div>
          {">> "}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnterKeyPress}
          />
        </div>
        <div className="column right">
          <InformationBox />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
