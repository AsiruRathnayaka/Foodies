import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const AddPost = ({ onAddPost }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleAddPost = () => {
    // Create a new post object with the text and image values
    const newPost = {
      text: text,
      image: image,
      date: new Date(),
    };

    // Call the onAddPost callback function with the new post object
    onAddPost(newPost);

    // Clear the text and image state values
    setText("");
    setImage("");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        bgcolor: "white",
      }}
    >
      <TextField
        multiline
        rows={3}
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ marginBottom: "10px" }}
      />

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" , justifyContent:"space-between" }}>
        <AddPhotoAlternateIcon sx={{ marginRight: "10px" }} />

        <Button
          variant="contained"
          onClick={handleAddPost}
          sx={{
            bgcolor: "orange",
            "&:hover": {
              backgroundColor: "hsl(35, 100%, 50%)",
              color: "#black",
              fontWeight: "700",
            },
            fontFamily: "Quicksand",
            boxShadow: "none",
            color: "black",
          }}
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default AddPost;
