// netlify/functions/indexnow.js

// We use an async import for node-fetch as it's an ES module.
// Netlify will bundle it correctly during the build process.
exports.handler = async function(event, context) {
  const fetch = (await import('node-fetch')).default;

  const apiKey = process.env.INDEXNOW_API_KEY;
  const sitemapUrl = process.env.SITEMAP_URL;

  // Validate that environment variables are set
  if (!apiKey || !sitemapUrl) {
    const errorMessage = 'INDEXNOW_API_KEY or SITEMAP_URL environment variables are not set in Netlify.';
    console.error(errorMessage);
    return {
      statusCode: 500,
      body: errorMessage,
    };
  }

  const host = new URL(sitemapUrl).hostname;
  const indexNowApiUrl = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(sitemapUrl)}&key=${apiKey}`;

  console.log(`Attempting to ping IndexNow for: ${sitemapUrl}`);

  try {
    const response = await fetch(indexNowApiUrl);

    if (response.ok) {
      const successMessage = `Successfully pinged IndexNow API. Status: ${response.status}`;
      console.log(successMessage);
      return {
        statusCode: response.status,
        body: successMessage,
      };
    } else {
      const errorBody = await response.text();
      const errorMessage = `Failed to submit to IndexNow. Status: ${response.status}. Message: ${errorBody}`;
      console.error(errorMessage);
      return {
        statusCode: response.status,
        body: errorMessage,
      };
    }
  } catch (error) {
    const errorMessage = `An error occurred while calling the IndexNow API: ${error.message}`;
    console.error(errorMessage);
    return {
      statusCode: 500,
      body: errorMessage,
    };
  }
};
