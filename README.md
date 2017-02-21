# Graph Algorithms

In this 1-day sprint you will learn about an important data structure in computer science and data modelling: the graph. Graphs are composed of nodes and edges and represent entities with directed or undirected connections to one another. Social connections, transport links, computer networks and biological processes are examples of common uses of graph data structures.

You will work with directed and undirected graphs and will learn how to implement a Breadth First Search algorithm which searches for connections between two points on a graph. Such an algorithm would be useful for discovering whether two individuals are connected via a chain of mutual friends, or whether it is possible to make a journey from A to B using public transport.

## Tasks

1. Make sure you are familiar the following terms: Directed graph, undirected graph, weighted graph, unweighted graph, cyclic graph, acyclic graph, tree, node, edge, first-degree connection, second-degree connection.

Create a file `graphs.js`, begin to model and export some simple examples of directed graphs to work with as your mock data. Plan them on the whiteboard first. E.g:

```javascript
    const directed1 = {
        '0': [1],
        '1': [2],
        '2': [3, 4],
        '3': [],
        '4': []
    };

    // you don't just have to model numbers
    const directed1 = {
        'London': ['Paris', 'Brussels'],
        'Paris': ['Barcelona'],
        'Brussels': [],
        'Barcelona': ['Marseilles'],
        'Marseilles': []
    }
```
    
where the keys are the identifiers of the nodes and the arrays represent the identifiers of the other nodes to which the node has a connection.


2. With the person near you, discuss and either whiteboard/plan on paper the way your Breadth First Search algorithm will work in pseudocode when given a graph in the above format. The algorithm determines if the start node is connected to the final node, returning a boolean. The function should take as arguments a graph, a `start` node identifier, and an `end` node identifier.

2. With the graphs you have created, implement and test your search function.

3. Revise what you learned earlier this week by implementing your own queue data structure to use in your breadth first algorithm.


**Bonus**: It can be tiresome to keep writing graphs by hand to test with. Implement and test a function that generates random directed numerical graphs. The function should take a size, which is the number of nodes you want.

**Bonus**: Extend your Breadth First Search algorithm to return the shortest route from start to end in the format of an array of node identifiers. (This is hard!). Model some undirected and directed graphs to pass to this algorithm.
