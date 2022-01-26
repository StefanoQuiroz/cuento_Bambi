let DND = {
    arrDragabbles:[],
    crea:(nombre, drags, drops, pos, onStart = undefined, onDrag = undefined, onHit = undefined, onNoHit = undefined) => {
        let umbralHit = '20%';
        DND.arrDragabbles.push(
            {
                name:nombre, 
                drag:Draggable.create(drags, {
                        type:'top,left',
//                        bounds:'#cuento',
                        onDragStart:function(e){
                            if(onStart!== undefined){
                                onStart(this.target);
                            }
                        },
                        onDrag:function(e){
                            if(onDrag!== undefined){
                                onDrag(this.target, this);
                            }
                        },
                        onDragEnd:function(e){
                            let i = drops.length;
                            while (--i > -1) {
                                if (this.hitTest(drops[i], umbralHit)) {
                                    if(onHit!== undefined){
                                        onHit(this.target, drops[i]);
                                    } 
                                    return;
                                } else {
                                    if(onNoHit!== undefined){
                                        onNoHit(this.target, drops[i]);
                                    }
                                }
                            }
                        }
                    }
                ),
                posOrig:pos
            }
        )
    }
};