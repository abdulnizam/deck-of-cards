import {
    makeDeckCard,
    shuffleItems,
    sortDrawnCards,
    drawCard
} from './';

describe('Utils library', () => {

    it('should handle makeDeckCard', () => {
        expect(makeDeckCard()).toHaveLength(52);
    });

    it('should handle shuffleItems', () => {
        const resultItems: any = shuffleItems([{
            suit:"diams",
            suitIndex:0,
            rank:"ace",
            rankIndex:0,
        },{
            suit:"diams",
            suitIndex:1,
            rank:1,
            rankIndex:0,
        }]);

        expect(resultItems[0].rank).toEqual(1);
    });

    it('should handle sortDrawnCards', () => {
        const resultItems: any = sortDrawnCards([{
            suit:"diams",
            suitIndex:0,
            rank: 1,
            rankIndex:0,
        },{
            suit:"diams",
            suitIndex:1,
            rank: "ace",
            rankIndex:0,
        }]);

        expect(resultItems[0].rank).toEqual(1);
    });

    it('should handle drawCard', () => {
        const resultItems: any = drawCard([{
            suit:"diams",
            suitIndex:0,
            rank:"ace",
            rankIndex:0,
          }], []);

        expect(resultItems.draw[0].rank).toEqual("ace");
        expect(resultItems.deck.length).toEqual(0);
    });

});

