# cubist-take-home

### Features
- Built using the Typescript template of `create-react-app`.
- No external components or stylesheets used.
- Only one very lightweight and simple library used (`classnames`).
- All addresses will truncate in a manner that always shows their last 4 characters if there is not enough space to show the entire address.
- Mock data randomly generated on each page load to showcase a variety of transactions

### Caveats
A few things that I chose to leave as they are in the interest of time,
and one thing I wasn't clear on the data structure for:
- All addresses are shown as `0xrandomhexdata` even if it doesn't match the chain,
this just saved time generating mock data.
- The `<Address />` component will sometimes leave a small gap (<1 em) between the
ellipsis and the last 4 characters.
- The definition for the Transaction object seemed to be missing at least one
property that was referenced elsewhere in the documentation (`submitted`), and
to simplify the generation of mock data I am not generating a full list of
approvals for each transaction, only a number out of 5 and then for the history
tab choosing which status to show based on the number of approvals.