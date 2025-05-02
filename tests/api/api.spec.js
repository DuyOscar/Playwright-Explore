// const { test, expect, request } = require("@playwright/test");

// const REPO = "test-repo-1";
// const USER = "github-username";

// test.describe(
//   "Login test",
//   {
//     tag: "@smoke",
//   },
//   () => {
//     test("Sample GET request", { tag: "@API001" }, async ({ request }) => {
//       // Send a GET request to the specified URL
//       const issues = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
//       console.log("Response:", issues);

//       // Log the response status
//       console.log("Response status:", issues.status());
    
//       // Assert that the response status is OK (status code 200)
//       expect(issues.ok()).toBeTruthy();
    
//       // Parse the response body as JSON
//       const responseData = await issues.json();
    
//       // Log the response data
//       console.log("Response data:", responseData);
    
//       // Assert that the response data matches the expected structure and content
//       expect(responseData).toEqual(
//         expect.objectContaining({
//           userId: 1,
//           body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//         })
//       );
//     });
    

//     // test('Sample GET request', async ({ request }) => {
//     //   const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
//     //     data: {
//     //       title: '[Feature] request 1',
//     //       body: 'Feature description',
//     //     }
//     //   });
//     //   expect(newIssue.ok()).toBeTruthy();

//     //   const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
//     //   expect(issues.ok()).toBeTruthy();
//     //   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     //     title: '[Feature] request 1',
//     //     body: 'Feature description'
//     //   }));
//     // });
//   }
// );
