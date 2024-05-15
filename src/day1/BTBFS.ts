export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];
    
    while (queue.length) {
        const next = queue.shift() as BinaryNode<number> | undefined;

        if (!next) {
            continue;
        }
        
        if (next.value === needle) {
            return true;
        };

        if (next.left) {
            queue.push(next.left);
        }

        if (next.right) {
            queue.push(next.right);
        }
    }

    return false
}