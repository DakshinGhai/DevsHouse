// youtubeUtils.js

function extractVideoId(videoUrl) {
  // Regular expression to match YouTube video ID
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  // Match the regex pattern against the video URL
  const match = videoUrl.match(regex);

  if (match && match[1]) {
    return match[1]; // Return the video ID
  } else {
    return null; // Return null if no match found
  }
}

module.exports = {
  extractVideoId: extractVideoId,
};
