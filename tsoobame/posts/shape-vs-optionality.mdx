# Decomplecting shape and optionality

## TLDR;

Defining a schema for a given entity we tend to define what attributes this entity has, what types or invariants
each of those attributes have and what attributes are required or optional.

In this post I am exposing that the shape of the data (attributes and their types) need to be discussed separately
from their optionality. The optionality does not belong to the entity but to the operation being executed.
If we discuss and define both concepts together as part of the Entity we are complecting two concepts that should we separate
them, the simplicity, clarity and reusability of our system will be greatly improved.

## Introduction

Apart from my own experience some of the concepts described in this post are also described by well-known
engineers like Rich Hickey in [Maybe Not](https://www.youtube.com/watch?v=YR5WdGrpoug) available in my [recommended resources](/recommended-resources)

I will use a Blog Post as the example for the model but the concepts in this post can be applied to any entity and discussion we can think of.

## Defining a blog Post

### Defining the shape

We need to define the data model of a Post that will be used in a blog (any blog).
After some meetings we agree that we need the following fields:

```text
- ID: uuid that will identiy the post uniquely
- Title: short text to be shown in links and use as slug
- Body: text where the post will be written to
- Tags: list of keywords to find similar posts
- PublishedAt: datetime when the post was published
```

### Defining the optionality

Once we agree on the shape of the Post entity, we start a new discussion:

<Quote>What fields are required and what are optional?</Quote>

It seems like all are required since we would need to show all of them in the blog. So we move on
and decide that we will make all columns NOT NULL in the DB.

After some time discussing, a junior developer asks:

<Quote>What about drafts?</Quote>

Another discussion starts about "What is a draft?". Should a draft have the same shape as the Post but with "nullable"
fields? what are the required fields in this case?

After some time discussing the team decided to have 2 very similar tables one with drafts where columns (except id) are NULLABLE and
posts where all columns are required.

### Consequences

There are two entities that somehow are too closely related.
This lead to some problems:

- ⛔ Entity proliferation. We have all been in projects with too many entities that seem to describe almost the same thing.
- ⛔ Change management: New fields in Posts will require new fields in Drafts almost always.
- ⛔ Event ambiguity: If we use EDA or similar, are Drafts / Posts events sent to the same topic? are they really different?
  how can we see the history of a Post if it starts as a Draft?
- ✅ DB leverage: we can use DB schemas to control whether the data being stored is correct or not.

## Rolling back

Defining the shape of the entity is something we cannot avoid (or if we can we should not). Having
a clear description of what an Entity is, and what parts form it is desirable specially if the names
and types of the fields are defined by the Domain experts.

The problem started when we discussed about the optionality of the fields. When we started discussion:

What fields are required and what are optional?

The answer to this question should have been another question:

<Quote>When?</Quote>
(as engineers we should ask `when` more often than we do)

### Optionality per operation

What are the operations we can do for/on Posts?
Let's say that we can do 3 operations with Posts:

- Save the post
- Publish the post
- Unpublish the post
- Delete the post

Rules are:

- We cannot edit a post if it is published
- We cannot delete a post if it is published

Optionality has to do with the operation we want to perform on/with a given Envity.
For example, asking:

What are the required fields when publishing a post?

The conclusion would be very similar to the [previous discusion](#defining-the-optionality).

But if we discussed about what are the required field when saving a Post then the answer will be something around: None.

We can let users save the posts in whatever state they are (missing tags, missing body, etc)

### Consequences

There is only one entity that goes through different states until it is published.
The benefits are:

- ✅ Entity proliferation: so far under control.
- ✅ Change management: there is only one entity we need to think about.
- ✅ Event unambiguity: all events belong to the same entity so we have one topic and one history line.
- ⛔ DB leverage: DB Schema cannot be leveraged to control required fields/columns. The control is in the application layer.

## Appendix

If we changed the rules and we allowed to edit a post while it is published when discussing the optionality during the `save` operation
we would need to ask `When` again.
When the post is already published the requirements will be different than when the post is not published yet (or was unpublished).
