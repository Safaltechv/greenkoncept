import { Component, OnInit } from '@angular/core';
import { TreeData } from 'src/app/core/models/core.model';
import { HierachyService } from 'src/app/core/services/hierachy.service';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {
  hierarchy: any;

  constructor(
    private readonly hierarchyService: HierachyService,
  ) { }

  ngOnInit(): void {
    this.hierarchyService.getHierarchy().subscribe((response: any) => { 
      this.hierarchy = response.entity.nodeStandardMetadata.children;
    });
  }

  getChildren = (node: TreeData) => node.children;

  nestedTreeControl = new NestedTreeControl(this.getChildren);

  hasChild(_: number, node: TreeData) {
    return node.children != null && node.children.length > 0;
  }
}
