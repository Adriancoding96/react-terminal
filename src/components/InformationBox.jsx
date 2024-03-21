const InformationBox = () => {
  return (
    <div className="information-box">
      <div className="information-header">
        <h2 className="custom-h2">Commands CheatSheet</h2>
      </div>
      <div className="commands">
        <h4 className="custom-h4">ls - Shows content of current directory</h4>
        <h4 className="custom-h4">clear - clears terminal</h4>
        <h4 className="custom-h4">cd - changes directory</h4>
        <h4 className="custom-h4">.. - move to parent directory</h4>
        <h4 className="custom-h4">root - move to root directory</h4>
        <h4 className="custom-h4">nc - runs executable</h4>
        <h4 className="custom-h4" style={{ marginBottom: "4px" }}>
          help - detailed command information
        </h4>
      </div>
    </div>
  );
};

export default InformationBox;
