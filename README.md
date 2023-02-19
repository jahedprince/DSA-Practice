# LeetCode Patterns

Preparing for coding interviews can be a source of anxiety for many developers as it involves covering a vast amount of material that may feel irrelevant to their daily work, adding to the stress. As a result, it has become common for developers to spend several weeks sifting through numerous interview questions on websites such as LeetCode. One of the most frequent concerns expressed by developers before an interview is whether they have solved enough practice questions and if they could have done more.

There are hundreds of questions on LeetCode and it's nearly impossible to solve all of them, unless of course you spends weeks and hours per day to truly solve and understand all of them. However, if you understand the generic patterns, you can use them as a template to solve a myriad of other problems with slight variations.

Here, I’ve laid out the top 14 patterns that can be used to solve any coding interview question, as well as how to identify each pattern, and some example questions for each.

1. Sliding Window

The Sliding Window pattern is used to perform a required operation on a specific window size of a given array or linked list, such as finding the longest subarray containing all 1s. Sliding Windows start from the 1st element and keep shifting right by one element and adjust the length of the window according to the problem that you are solving. In some cases, the window size remains constant and in other cases the sizes grows or shrinks.

Following are some ways you can identify that the given problem might require a sliding window:

- The problem input is a linear data structure such as a linked list, array, or string
- You’re asked to find the longest/shortest substring, subarray, or a desired value
  Common problems you use the sliding window pattern with:
  - Maximum sum subarray of size ‘K’ (easy)
  - Longest substring with ‘K’ distinct characters (medium)
  - String anagrams (hard)
